import React from "react"
import "./Body.css";

function Body(props) {
    return (
      <div className="body">
        <h1 className="bodytext">{props.bodytext}</h1>
      </div>
    );
  }
  export default Body;