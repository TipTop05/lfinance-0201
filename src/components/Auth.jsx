// Auth = Авторизация

import React from 'react';
import {host} from "../config";
import {Redirect} from 'react-router-dom'

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      redirect: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("pass", this.state.pass);
    fetch(host + "/handlerAuth", {
      credentials: 'include',
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        if (result.result === "success") {
          this.setState({
            redirect: true
          })
        }
      });
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/"/>;
    } else {
      return (
        <div className="container">
          <div className="col-md-5 my-5 mx-auto">
            <h1 className="text-center my-3">Авторизация</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input value={this.state.email} onChange={this.handleInput} name="email" type="email"
                       className="form-control" placeholder="E-mail"/>
              </div>
              <div className="mb-3">
                <input value={this.state.pass} onChange={this.handleInput} name="pass" type="password"
                       className="form-control" placeholder="Пароль"/>
              </div>
              <div className="mb-3 text-center">
                <input type="submit" value="Войти" className="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}