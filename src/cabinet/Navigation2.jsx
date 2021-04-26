// Меню личного кабинета

import React from 'react';
import {NavLink} from "react-router-dom";
import {host} from "../config";

export const Navigation2 = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

        {/* Brand и toggle сгруппированы для лучшего отображения на мобильных дисплеях */}
        <div className='navbar-header'>
          {/* Код button ниже делает Меню бургер на мобильной версии сайта  */}
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            {/* // Три тега span образуют три горизонтальные линии, похожие на кнопку, известную как значок «бургер» */}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <NavLink className="navbar-left page-scroll" to="/finance">
            <img
              alt="logo"
              src="/logo-lf.svg"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </NavLink>
          <NavLink  className="navbar-brand page-scroll" to="/finance">
            &nbsp;
            Личные финансы
          </NavLink>{' '}

        </div>
        {/* Конец кода Brand и toggle */}

        {/*  Ниже навигационные ссылки, формы, и другой контент для переключения */}
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

            <li>
              <NavLink className="nav-link" to="/finance">Мои финансы</NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/statistics">Статистика</NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/profile">Профиль</NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/start">С чего начать?</NavLink>
            </li>



            {/* Кнопка ВЫХОД */}

            <li>
              <button type="button" className="btn btn-default navbar-btn">
                <NavLink className="nav-link" to="/">ВЫХОД</NavLink>
              </button>
            </li>

            {/*  Пытался сделать ВЫХОД с закрытием сессии
            <li>
              <button type="button" className="btn btn-default navbar-btn" onClick={() => {
                fetch(host + "/sessionDestroy", {
                  credentials: 'include'
                })
                  .then(response => response.text())
                  .then(result => console.log(result));
              }
              }><NavLink to="/">ВЫХОД</NavLink>
              </button>
            </li>
            */}

          </ul>

        </div>
      </div>
    </nav>
  )
}
