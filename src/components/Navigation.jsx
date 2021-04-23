// Навигационная панель (Меню)

import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = (props) => {
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

          <a className='navbar-left page-scroll' href='#page-top'>
            <img
              alt="logo"
              src="/logo-lf.svg"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
            </a>
            <a className='navbar-brand page-scroll' href='#page-top'>
              &nbsp;
              Личные финансы
           </a>{' '}

        </div>
        {/* Конец кода Brand и toggle */}

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
            <li>
              <a href='#services' className='page-scroll'>
                Что мы предлагаем ?
              </a>
            </li>

            <li>
              <a href='#testimonials' className='page-scroll'>
                Отзывы
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Команда
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Контакты
              </a>
            </li>
            {/* Создали кнопку ВХОД */}
            <li>
              <button type="button" className="btn btn-default navbar-btn">
                <NavLink className="nav-link" to="/auth">ВХОД</NavLink>
              </button>
            </li>
          </ul>

        </div> {/* navbar-collapse */}
      </div> {/* container */}
    </nav>
  )
}
