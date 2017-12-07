import React, { Component } from 'react';

import DropdownList from './dropdown-list.js';

import drinkLogo from '../../assets/drink-logo.png';
import stars from '../../assets/stars.png';

import './form.scss';

export default class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='form-page'>
        <div className='logo-big'>
          <img className='logo-star' src={stars} alt='Stars' />
          <img className='logo-drink' src={drinkLogo} alt='Drink Predictor Logo'/>
        </div>
        <DropdownList />
      </div>
    );
  }
}