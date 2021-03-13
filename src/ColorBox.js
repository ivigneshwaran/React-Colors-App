import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setInterval(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, bg } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={bg} onCopy={this.changeCopyState}>
        <div style={{ background: bg }} className="ColorBox">
          <div
            style={{ background: bg }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{bg}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
          </div>
          <span className="see-more">more</span>
        </div>
      </CopyToClipboard>
    );
  }
}
