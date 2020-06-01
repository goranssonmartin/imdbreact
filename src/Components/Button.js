import React, { Component } from "react";
import "../Styling/Button.css";
class Button extends Component {
  render() {
    return <button onClick={this.props.buttonOnClick}>{this.props.buttonText}</button>;
  }
}

export default Button;
