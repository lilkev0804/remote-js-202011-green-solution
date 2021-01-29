import React from "react"
import "./Result.css"
// import page calculator

let resultCalc = 150 > 100

function Result(props) {
    return (
      <div className="result">
        <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? props.logoResult : props.logoResult2} alt={props.logoName} />
        <input className="resultText" type="text" value={props.resultText}/>
      </div>
    );
  }
  export default Result;