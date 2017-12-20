import React, { Component } from 'react';
import _ from 'lodash';

import { getDrink } from '../../actions'
import drinkLogo from '../../assets/drink-logo.png';
import stars from '../../assets/stars.png';

import './form.scss';

const questionList = require('../../assets/questions-list.json');

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      questionA: questionList.questionA.options[0],
      questionB: questionList.questionB.options[0],
      questionC: questionList.questionC.options[0],
      questionD: questionList.questionD.options[0],
      questionE: questionList.questionE.options[0],
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'questionA') {
      this.setState({questionA: value});
    } else if (name === 'questionB') {
      this.setState({questionB: value});
    } else if (name === 'questionC') {
      this.setState({questionC: value});
    } else if (name === 'questionD') {
      this.setState({questionD: value});
    } else if (name === 'questionE') {
      this.setState({questionE: value});
    }
  }

  handleSubmit() {
    this.setState({ fetchingSoda: true });
    setTimeout(() => this.setState({ fetchingSoda: false }), 3000);
    let drink = getDrink();
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
      </div>
    );
  }
}
