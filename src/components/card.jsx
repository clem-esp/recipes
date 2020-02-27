import React, {Component} from "react";

export default class Card extends Component {
  render(){
    return(
      <div className="card card-recipe">
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.txt}</p>
      </div>
    )
  }
}
