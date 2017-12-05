import React, { Component } from 'react';

import './navigation.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div>Predictor</div>
        <div>Data</div>
      </div>
    );
  }
}