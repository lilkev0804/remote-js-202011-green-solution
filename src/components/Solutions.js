import React from "react";
import "./Solutions.css";
import CardsList from "./CardsList";

class Solutions extends React.Component {
  
  render() {
    const params = this.props.match.params
    console.log(params.test)
    return (
      <div>
        <div className="solutions-title">
          <h1>Comment réduire mon impact carbone ?</h1>
        </div>
        <CardsList />
      </div>
    );
  }
}

export default Solutions;
