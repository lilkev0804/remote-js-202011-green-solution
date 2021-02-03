import React from "react";
import Result from './Result';
import Solution from './Solution';
import "./BodyResult.css";

function BodyResult() {
    return (
      <div className="bodyResult">
        <h1 className="bodytext">Mon émission de CO2 pour le mois de janvier</h1>
          <Result/>
          <Solution/>
      </div>
    );
  }
  export default BodyResult;