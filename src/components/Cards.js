import React from "react";
import "./Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <div className={`solutions-cards ${this.props.background}`} id={this.props.id} data-index={this.props.dindex}>
        <div className="solutions-texte">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="solutions-photo">
          <img
            className={`${this.props.imageName}`}
            src={this.props.image}
            alt={this.props.imageName}
          />
        </div>
      </div>
    );
  }
}

export default Cards;
