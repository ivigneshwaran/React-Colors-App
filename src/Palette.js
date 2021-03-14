import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
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
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((c) => (
      <ColorBox bg={c.hex} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLev} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
