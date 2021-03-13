import React, { Component } from "react";
import Palette from "./Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./ColorHelpers";

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(SeedColors[4])} />
      </div>
    );
  }
}
