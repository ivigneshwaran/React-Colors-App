import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLev = this.changeLev.bind(this);
  }
  changeLev(e) {
    this.setState({ level: e });
  }
  render() {
    const {colors} = this.props.palette;
    const {level } = this.state;
    const colorBoxes = colors[level].map((c) => (
      <ColorBox bg={c.hex} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLev}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
