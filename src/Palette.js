import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLev = this.changeLev.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLev(e) {
    this.setState({ level: e });
  }
  changeFormat(val) {
    this.setState({format: val});
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((c) => (
      <ColorBox bg={c[format]} name={c.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLev} handleChange={this.changeFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
