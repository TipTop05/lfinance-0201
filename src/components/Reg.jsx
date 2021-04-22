// Reg = Регистрация

import React from "react";
import {host} from "../config";
import {Redirect} from 'react-router-dom'

export class Reg extends React.Component{
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.state = {
      email:"",
      pass:"",
      info:"",
      info_ok:"",
    }
  }

  sendForm(event){
    {/* event.preventDefault() - Изменяем поведение браузера по умолчанию */}
    event.preventDefault();
    const formData = new FormData();
    formData.append("email",this.state.email);
    formData.append("pass", this.state.pass);
    fetch(host+"/handlerReg",{
      credentials: 'include',
      method: "POST",
      body: formData
    }).then(response=>response.json())
      .then(result=>{
        console.log(result)
        if (result.result === "success"){
          this.setState({
            info_ok:"Регистрация прошла успешно. Выполните вход."
          })
        } else {
          this.setState({
            info: "Пользователь с таким email уже существует. Используйте другой email.",
            info_ok:""
          })
        }
      })
  }


  handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value
    })

    if (name === "email"){
      const formData = new FormData();
      formData.append("email",value);
      fetch(host+"/checkEmail",{
        credentials: 'include',
        method: "POST",
        body: formData
      }).then(response=>response.json())
        .then(result=>{
          console.log(result.result);
          if (result.result === "exist"){
            this.setState({
              info:"Уведомление функции handleInputChange: Пользователь с таким email уже существует. Используйте другой email."
            })
          } else {
            this.setState({
              info: ""
            })
          }
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-5 my-5 mx-auto">
          <h1 className="text-center my-3">Регистрация</h1>
          <form onSubmit={this.sendForm}>
            <div className="mb-3">
              <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email"
                     className="form-control" placeholder="E-mail"/>
              <p style={{color: "red"}}>{this.state.info}</p>
            </div>
            <div className="mb-3">
              <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password"
                     className="form-control" placeholder="Пароль"/>
            </div>
            <div className="mb-3">
              <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
              <p className="text-center my-3" style={{color: "green"}}>{this.state.info_ok}</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}