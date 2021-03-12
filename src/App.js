import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette {...SeedColors[5]} />
      </div>
    )
  }
}
