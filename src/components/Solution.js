import React from "react"
import "./Solution.css";

function Solution(props) {
    return (
      <div className="solution">
        <img className="imgGlobalwarming" src={props.imgGlobalwarming} alt={props.name} />
        <input className="solutionbutton" type="text" value={props.solutionbutton}/>
      </div>
    );
  }
  export default Solution;

