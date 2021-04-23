//  Finance = Учет поступлений и платежей

import React from 'react';
import {Route, Switch} from "react-router-dom";

export class Finance extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
                <h3>Финансы</h3>


            </div>
          </div>
        </div>
      </div>
    )
  }
}
