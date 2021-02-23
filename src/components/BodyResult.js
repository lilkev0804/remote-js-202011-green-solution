import React from "react";
import "./BodyResult.css";

function BodyResult() {
  const format = () => {
    let options = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date().toLocaleDateString([], options);
  } 
    return (
      <div className="bodyResult">
        <h1 className="bodytext">Mon émission de CO2 pour le {format()}</h1>
      </div>
    );
  }
  export default BodyResult;
