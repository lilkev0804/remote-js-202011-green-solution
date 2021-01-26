import React from "react"
import "./Result.css";

function Result(props) {
    return (
      <div className="result">
        <img className="logoResult" src={props.logoResult} alt={props.logoName} />
        <input className="resultText" type="text" value={props.resultText}/>
      </div>
    );
  }
  export default Result;