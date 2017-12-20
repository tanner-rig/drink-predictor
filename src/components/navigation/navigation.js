import React, { Component } from 'react';
import { Link } from 'react-router';
import drinkLogo from '../../assets/drink.png';

import './navigation.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <img className='nav-logo' src={drinkLogo} />
        <div><Link to='/'>Predictor</Link></div>
        <div><Link to='/users'>Users</Link></div>
        <div><Link to='/data'>Data</Link></div>
      </div>
    );
  }
}
