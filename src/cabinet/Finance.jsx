//  Finance = Учет поступлений и платежей

import React from 'react';
import {host} from "../config";

export class Finance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      session: ""
    }
  }

  componentDidMount() {
    fetch(host + "/getSession", {
      credentials: "include"
    })
      .then(response => response.text())
      .then(result => {
        this.setState({
            user_id: result
          }
        )
      });
  }

  render() {


      return (
        <div id='portfolio'>
          <div className='container'>

            <div className='row'>
              <div className='col-xs-12 col-md-3'>
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">СЧЕТА</h3>
                  </div>
                  <div className="panel-body">
                    Наличные<br/>
                    Карта<br/>
                    +
                  </div>
                </div>

                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">ДОХОДЫ</h3>
                  </div>
                  <div className="panel-body">
                    Зарплата<br/>
                    Приработок<br/>
                    Прочие<br/>
                    +
                  </div>
                </div>

                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">РАСХОДЫ</h3>
                  </div>
                  <div className="panel-body">
                    Продукты<br/>
                    Кафе<br/>
                    Транспорт<br/>
                    Машина<br/>
                    Товары для дома<br/>
                    Квартира<br/>
                    Отдых<br/>
                    Здоровье<br/>
                    +
                  </div>
                </div>

              </div>

              <div className='col-xs-12 col-md-9'>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">ОПЕРАЦИИ</h3>
                  </div>
                  <div className="panel-body">
                    Внесение операции:<br/>
                    Откуда / Куда / Сумма / Дата / Время / Комментарий /// Кнопка "Добавить"<br/>
                    <br/>
                    Список операций:<br/>
                    Дата<br/>
                    Время / Откуда / Куда / Комментарий / Сумма <br/>
                    Итого: "+" / "-"<br/>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }


}
