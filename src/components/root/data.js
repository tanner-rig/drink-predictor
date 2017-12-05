import React, { Component } from 'react';

import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

export default class Data extends Component {
  render() {
    return (
      <div className="data">
        <Navigation />
        <Footer />
      </div>
    );
  }
}