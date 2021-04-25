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
                Это могут быть условные "счета", например: Наличные, Карта. А также реальные счета в банке:
                Карта ВТБ, Кредитка Сбера.
              </div>
              <div className="alert alert-warning" role="alert">
                <big>2. Создайте категории для Расходов и для Доходов</big>
                <br/>
                Разделите на категории ваши расходы: Продукты, Кафе, Машина, Коммуналка, Товары для дома,
                Одежда, Отдых, Развлечения, Красота, Здоровье, ...
                <br/>
                Разделите на категории ваши доходы: Зарплата, Приработок, Подарки, ...
              </div>
              <div className="alert alert-success" role="alert">
                <big>3. Ведите учёт</big>
                <br/>
                Вносите информацию о тратах и доходах, просматривайте статистику по категориям доходов и расходов.
                <br/>
                Анализируйте расходы и ищите пути их снижения. Оптимизация расходов поможет отказаться от части ненужных трат,
                а высвобожденные деньги можно отложить, направить на сбережения или инвестировать.
              </div>
            </div>
          </div>
          <NavLink className="btn btn-success btn-lg" to="/finance">Начать вести учёт</NavLink>

        </div>
      </div>
    )
  }

}