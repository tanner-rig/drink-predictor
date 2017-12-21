import React, { Component } from 'react';
import _ from 'lodash';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import Drink from './drink'

import './form.scss';

import { getDrink } from '../../actions';
import drinkLogo from '../../assets/drink-logo.png';
import stars from '../../assets/stars.png';

const usersList = require('../../assets/users.json');

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      user: usersList[Object.keys(usersList)[0]].id,
      userList: usersList,
      drinkFound: false,
      predictedDrink1: '',
      predictedDrink2: ''
    };

    this.handleUserBack = this.handleUserBack.bind(this);
    this.handleUserSelectChange = this.handleUserSelectChange.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserBack() {
    this.setState({
      fetchingSoda: false,
      predictedDrink1: '',
      predictedDrink2: '',
      drinkFound: false
    });
  }

  handleUserSelectChange(e) {
    let value = e.target.value;
    this.setState({user: value});
  }

  handleUserSubmit() {
    this.setState({ fetchingSoda: true });

    let userSubmitted = _.get(this.state.userList, this.state.user);

    setTimeout(() => {
      let drinks = getDrink(userSubmitted);
      this.setState({
        fetchingSoda: false,
        predictedDrink1: `${drinks.firstDrink.base} with ${drinks.firstDrink.flavor}`,
        predictedDrink2: `${drinks.secondDrink.base} with ${drinks.secondDrink.flavor}`,
        drinkFound: true
      });
    }, 1000);
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
      return <option key={index} value={opt.id}>{opt.id}</option>;
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
              <Drink drink1={this.state.predictedDrink1} drink2={this.state.predictedDrink2} />
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
