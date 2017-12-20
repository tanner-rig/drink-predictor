import React, { Component } from 'react';
import _ from 'lodash';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Drink from './drink'

import './form.scss';

import { getDrink } from '../../actions';
import drinkLogo from '../../assets/drink-logo.png';
import stars from '../../assets/stars.png';

const users = require('../../assets/users.json');

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      user: users.usersList[0],
      userList: users.usersList,
      drinkFound: false,
      predictedDrink: ''
    };

    this.handleUserBack = this.handleUserBack.bind(this);
    this.handleUserSelectChange = this.handleUserSelectChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserBack() {
    this.setState({
      fetchingSoda: false,
      predictedDrink: '',
      drinkFound: false
    });
  }

  handleUserSelectChange(e) {
    let value = e.target.value;
    console.log('VALUER: ', value);

    this.setState({user: value});
  }

  handleUserSubmit() {
    this.setState({ fetchingSoda: true });
    let drink = getDrink();
    this.setState({
      fetchingSoda: false,
      predictedDrink: `${drink.base} with ${drink.flavor}`,
      drinkFound: true
    });
    console.log('DRINK: ', drink);
  }

  loadingSoda() {
    return (
      <div className='loading-soda'>
        Loading<span className='loading-dot'>.</span><span className='loading-dot'>.</span><span className='loading-dot'>.</span>
      </div>);
  }

  showUsers() {
    return (
      <div className='form-question-section'>
        <div className='form-question'>Pick a user:</div>
        <select className='form-option' value={this.state.user} onChange={this.handleUserSelectChange}>
          {this.showUserOptions(this.state.userList)}
        </select>
      </div>
    );
  }

  showUserOptions(options) {
    let userOptions = _.map(options, (opt, index) => {
      return <option key={index} value={opt}>{opt}</option>;
    });

    return userOptions;
  }

  render() {
    return (
      <div className="data">
        <Navigation />
        <div className='form-page'>
          {this.state.drinkFound ?
            <div>
              <Drink drink={this.state.predictedDrink}/>
              <div className='predict-button'>
                <button onClick={this.handleUserBack}>Go Back</button>
              </div>
            </div> :
            <div>
              <div className='logo-big'>
                <img className={`logo-star ${this.state.fetchingSoda ? 'spin-star' : ''}`} src={stars} alt='Stars' />
                <img className='logo-drink' src={drinkLogo} alt='Drink Predictor Logo'/>
              </div>
              {this.state.fetchingSoda ? this.loadingSoda() :
                <div>
                  <div className='form-section'>
                    <form>
                      {this.showUsers()}
                    </form>
                  </div>
                  <div className='predict-button'>
                    <button onClick={this.handleUserSubmit}>Predict</button>
                  </div>
                </div>
              }
          </div>}
        </div>
        <Footer />
      </div>
    );
  }
}
