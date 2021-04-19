// Навигационная панель (Меню)

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

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
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <a className='navbar-brand page-scroll' href='#page-top'>
            Личные финансы
          </a>{' '}
        </div>



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
                ВХОД
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
