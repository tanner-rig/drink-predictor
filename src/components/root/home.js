import React, { Component } from 'react';

import Form from '../form/form';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <Form />
        <Footer />
      </div>
    );
  }
}