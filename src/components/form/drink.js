import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export default class Drink extends Component {
  render() {
    return (
      <div className='drink-results'>
        1. {this.props.drink1}
        <br />
        2. {this.props.drink2}
      </div>
    );
  }
}

Drink.propTypes = {
  drink1: PropTypes.string.isRequired,
  drink2: PropTypes.string.isRequired
};
