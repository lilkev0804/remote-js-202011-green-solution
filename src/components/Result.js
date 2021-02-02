import React from "react"
import "./Result.css"
import Body from './BodyResult';
// import page calculator

let resultCalc = 150 > 100

function Result(props) {
    return (
      <div>
        <Body
          bodytext="Mon émission de CO2 pour le mois de janvier"
        />
        <div className="result">
          <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? props.logoResult : props.logoResult2} alt={props.logoName} />
          <input className="resultText" type="text" value={props.resultText}/>
        </div>
      </div>

    );
  }
  export default Result;