//  Start = Краткое руководство по работе в системе Личные финансы

import React from 'react';
import {NavLink} from "react-router-dom";

export class Start extends React.Component{

  render() {
    return (
      <div id='portfolio'>
        <div className='container'>

          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <h3><big>Как начать вести учёт?</big></h3>
              <div className="alert alert-info" role="alert">
                <big>1. Добавьте счета</big>
                <br/>
                Это могут быть условные "счета", например: Наличные, Карта, Кошелек. А также реальные счета в банке:
                Карта ВТБ, Кредитка Сбера.
              </div>
              <div className="alert alert-warning" role="alert">
                <big>2. Создайте категории</big>
                <br/>
                Условно разделите на категории ваши раскоды: Продукты, Поездки, Коммуналка и т.п. А также доходы:
                Зарплата, Стипендия и т.п.
              </div>
              <div className="alert alert-success" role="alert">
                <big>3. Ведите учёт</big>
                <br/>
                Вносите информацию о тратах и доходах, просматривайте статистику по категориям, планируйте бюджеты.
              </div>
            </div>
          </div>
          <NavLink className="btn btn-success btn-lg" to="/finance">Начать вести учёт</NavLink>

        </div>
      </div>
    )
  }

}