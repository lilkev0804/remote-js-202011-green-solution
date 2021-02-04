import React from "react"
import "./Result.css"

// import page calculator

let resultCalc = 150 > 100;
const logoResult="image-src/logoResult.png";
const logoResult2="image-src/logoResult2.png";

function Result() {
    return (
      <div className="result">
        <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? logoResult : logoResult2} alt={"logoResult"} />
        <input className="resultText" type="text" value={/*recupérer nombre du calculator*/" 150 T  de  CO2"}/>
      </div>

    );
  }
  export default Result;