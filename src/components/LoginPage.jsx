
import React from 'react';
import {BrowserRouter, Link, NavLink} from "react-router-dom";
import {Auth} from "./Auth";
import {Reg} from "./Reg";


export const LoginPage = (props) => {
  return (
    <div className="container">
      <div className="col-sm-5">
        <Link to=""></Link>
      </div>

      {/* Как вставить компонент Auth ? */}
      <div id='auth'>
        <Auth/>
      </div>

      {/* Как вставить компонент Reg ? */}
      <div id='reg'>
        <Reg/>
      </div>

    </div>
  )
}
