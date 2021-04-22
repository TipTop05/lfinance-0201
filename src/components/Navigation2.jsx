import React from 'react';
import {NavLink} from "react-router-dom";

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

          <a className='navbar-brand page-scroll' href='#page-top'>
            <i className='fa fa-pie-chart'></i>
            &nbsp;
            {/* Не вставляется логотип почему-то
            <img
              alt=""
              src="/logo.svg"
              width="20"
              height="20"
              className="d-inline-block align-top"
            />
            */}
            Личные финансы
          </a>{' '}
        </div>


        {/*  Ниже навигационные ссылки, формы, и другой контент для переключения */}
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Зачем это нужно ?
              </a>
            </li>

            {/* Создали кнопку ВХОД */}
            <li>
              <button type="button" className="btn btn-default navbar-btn">
                <NavLink className="nav-link" to="/login">ВХОД</NavLink>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
