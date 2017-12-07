import React, { Component } from 'react';

export default class DropdownList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='form'>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  }
}