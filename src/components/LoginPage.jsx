
import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";


export const LoginPage = (props) => {
  return (
    <div className="container">
      <div className="col-sm-5 mx-auto my-5">
        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="#auth">Авторизация</a></li>
          <li role="presentation"><a href="#reg">Регистрация</a></li>
        </ul>
      </div>

      {/* Как вставить компонент Auth ? */}
      <div id='auth'>

      </div>

      {/* Как вставить компонент Reg ? */}
      <div id='reg'>

      </div>

    </div>
  )
}
