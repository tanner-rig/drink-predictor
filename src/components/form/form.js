import React, { Component } from 'react';
import _ from 'lodash';

import Drink from './drink'

import { getDrink } from '../../actions';
import drinkLogo from '../../assets/drink-logo.png';
import stars from '../../assets/stars.png';

import './form.scss';

const questionList = require('../../assets/questions-list.json');
const usersList = require('../../assets/users.json');

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      questionA: Number(questionList.questionA.options[0].charAt(0)),
      questionB: Number(questionList.questionB.options[0].charAt(0)),
      questionC: Number(questionList.questionC.options[0].charAt(0)),
      questionD: Number(questionList.questionD.options[0].charAt(0)),
      questionE: Number(questionList.questionE.options[0].charAt(0)),
      questionF: Number(questionList.questionF.options[0].charAt(0)),
      questionG: Number(questionList.questionG.options[0].charAt(0)),
      drinkFound: false,
      predictedDrink1: '',
      predictedDrink2: '',
      userList: usersList
    };

    this.handleBack = this.handleBack.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserID(questionArray) {
    let sumQ = _.sum(questionArray);
    let userRec = 'R_CkLCzVxfyGe1fLr';

    if (sumQ === 7) {
      userRec = 'R_CkLCzVxfyGe1fLr';
    } else if (sumQ <= 11) {
      userRec = 'R_RfB9XDjNlI8QlAB';
    } else if (sumQ <= 13) {
      userRec = 'R_2RVYvsm2K3P4raK';
    } else if (sumQ <= 15) {
      userRec = 'R_3JwTi26N0y48pvW';
    } else if (sumQ <= 18) {
      userRec = 'R_2TBDHqgGcjlHhMu';
    } else if (sumQ <= 21) {
      userRec = 'R_cTqF1zMc4U6iqBz';
    } else if (sumQ <= 23) {
      userRec = 'R_bmEmiEyQZGiKIZH';
    } else if (sumQ <= 25) {
      userRec = 'R_1dmeDi9akfL7hgO';
    } else if (sumQ >= 26) {
      userRec = 'R_31AzRE2ELZLutGs';
    }

    return userRec;
  }

  handleBack() {
    this.setState({
      fetchingSoda: false,
      predictedDrink1: '',
      predictedDrink2: '',
      drinkFound: false,
      questionA: Number(questionList.questionA.options[0].charAt(0)),
      questionB: Number(questionList.questionB.options[0].charAt(0)),
      questionC: Number(questionList.questionC.options[0].charAt(0)),
      questionD: Number(questionList.questionD.options[0].charAt(0)),
      questionE: Number(questionList.questionE.options[0].charAt(0)),
      questionF: Number(questionList.questionF.options[0].charAt(0)),
      questionG: Number(questionList.questionG.options[0].charAt(0))
    });
  }

  handleSelectChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'questionA') {
      this.setState({questionA: Number(value.charAt(0))});
    } else if (name === 'questionB') {
      this.setState({questionB: Number(value.charAt(0))});
    } else if (name === 'questionC') {
      this.setState({questionC: Number(value.charAt(0))});
    } else if (name === 'questionD') {
      this.setState({questionD: Number(value.charAt(0))});
    } else if (name === 'questionE') {
      this.setState({questionE: Number(value.charAt(0))});
    } else if (name === 'questionF') {
      this.setState({questionF: Number(value.charAt(0))});
    } else if (name === 'questionG') {
      this.setState({questionG: Number(value.charAt(0))});
    }
  }

  handleSubmit() {
    let { questionA, questionB, questionC, questionD, questionE, questionF, questionG } = this.state;

    let userID = this.getUserID([questionA, questionB, questionC, questionD, questionE, questionF, questionG]);

    this.setState({ fetchingSoda: true });

    let userSubmitted = _.get(this.state.userList, userID);

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

  showQuestions() {
    let questions = _.map(questionList, (q) => {
      return (
        <div key={q.name} className='form-question-section'>
          <div className='form-question'>{q.question}</div>
          <select className='form-option' value={q.value} name={q.name} onChange={this.handleSelectChange}>
            {this.showOptions(q.options)}
          </select>
        </div>);
    });

    return questions;
  }

  showOptions(options) {
    let optionList = _.map(options, (opt, index) => {
      return <option key={index} value={_.lowerCase(opt)}>{opt}</option>;
    });

    return optionList;
  }

  render() {
    return (
      <div className='form-page'>
        {this.state.drinkFound ?
          <div>
            <Drink drink1={this.state.predictedDrink1} drink2={this.state.predictedDrink2} />
            <div className='predict-button'>
              <button onClick={this.handleBack}>Go Back</button>
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
                    {this.showQuestions()}
                  </form>
                </div>
                <div className='predict-button'>
                  <button onClick={this.handleSubmit}>Predict</button>
                </div>
              </div>
            }
        </div>}
      </div>);
  }
}
