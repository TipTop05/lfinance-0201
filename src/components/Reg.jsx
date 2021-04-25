// Reg = Регистрация

import React from "react";
import {host} from "../config";
import {Link,Redirect} from 'react-router-dom'

export class Reg extends React.Component{
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      info: "",
      redirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(event) {
    {/* event.preventDefault() - Изменяем поведение браузера по умолчанию */}
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("pass", this.state.pass);
    fetch(host + "/handlerReg", {
      credentials: 'include',
      method: "POST",
      body: formData
    }).then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.result === "success") {
          this.setState({
            redirect: true
          })
          console.log(`Регистрация прошла успешно. Выполняется вход ...`);
        } else {
          this.setState({
            info: "Пользователь с таким email уже существует. Используйте другой email.",
          })
        }
      })
  }


  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      info: ""
    })
    this.setState({
      [name]: value,
    })
    if (name === "email") {
      const formData = new FormData();
      formData.append("email", value);
      fetch(host + "/checkEmail", {
        credentials: 'include',
        method: "POST",
        body: formData
      }).then(response => response.json())
        .then(result => {
          console.log(result.result);
          if (result.result === "exist") {
            this.setState({
              info: "Пользователь с таким email уже существует. Используйте другой email."
            })
          }
        });
    }
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/start"/>;
    } else {
      return (
        <div className="container">
          <Link to="/auth">Авторизация</Link>
          <div className="col-md-3 my-5 mx-auto">
            <h1 className="text-center my-3">Регистрация</h1>
            <form onSubmit={this.sendForm}>
              <div className="mb-3">
                <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email"
                       className="form-control" placeholder="E-mail"/>
                <p style={{color: "red"}}><small>{this.state.info}</small></p>
              </div>
              <div className="mb-3">
                <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password"
                       className="form-control" placeholder="Пароль"/>
              </div>
              <div className="mb-3 text-center">
                <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}