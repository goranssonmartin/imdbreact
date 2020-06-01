import React, { Component } from "react";
import "../Styling/Button.css";
class Button extends Component {
  render() {
    return <button >{this.props.buttonText}</button>;
  }
}

export default Button;
