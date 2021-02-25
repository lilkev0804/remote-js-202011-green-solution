import React from "react";
import "./Solutions.css";
import CardsList from "./CardsList";

const Solutions = (props) => {
  const params = props.match.params
  console.log(params.index)
    return (
      <div>
        <div className="solutions-title">
          <h1>Comment réduire mon impact carbone ?</h1>
        </div>
        <CardsList />
      </div>
    );

}

export default Solutions;
