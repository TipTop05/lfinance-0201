//  Profile = Настройки пользователя

import React from 'react';
import {host} from "../config";
import {NavLink} from "react-router-dom";

export class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user_id: ""
    }
  }

  componentDidMount() {
    fetch(host + "/getSession",{
      credentials: "include"
    })
      .then(response => response.text())
      .then(result => {
        this.setState({
            user_id: result
          }
        )
        console.log(this.user_id);
      });
  }

  render() {

      return (
        <div id='portfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-6'>
                <h3>Профиль</h3>

                <div>
                  <br/>
                  <h3>Проверка сессии</h3>
                  <h4>user_id: {this.state.user_id}</h4>
                </div>


              </div>
            </div>
          </div>
        </div>
      )
    }

}
