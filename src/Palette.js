import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(c => (
      <ColorBox bg={c.color} name={c.name} />
    ))
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
