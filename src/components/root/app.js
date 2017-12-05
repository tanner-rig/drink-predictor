import React, { Component } from 'react';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}