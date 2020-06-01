import React, { Component } from "react";
import "../Styling/Card.css";
import Button from "./Button";
class Card extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.imageSource} alt={this.props.name} className="cardImage"></img>
        </td>
        <td>
          <p>{this.props.name}</p>
        </td>
        <td>
          <p>{this.props.popularity}</p>
        </td>
        <td><Button buttonText="Delete" buttonOnClick={this.props.onClickFunction}/></td>
      </tr>
    );
  }
}
export default Card;
