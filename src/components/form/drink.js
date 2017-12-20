import React, { Component } from 'react';

export default class Drink extends Component {
  render() {
    return (
      <div>
        {this.props.drink}
      </div>
    );
  }
}
