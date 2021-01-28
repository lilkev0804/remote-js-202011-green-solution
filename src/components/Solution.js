import React from "react"
import "./Solution.css"
// import {link} from "react-router-dom";

function Solution(props) {
    return (
      <div className="solution">
        <img className="imgGlobalwarming" src={props.imgGlobalwarming} alt={props.name} />
        {/* <link to="/page solution"> */}
          <input className="solutionbutton" type="text" value={props.solutionbutton}/>
        {/* </link>  */}
      </div>
    );
  }
  export default Solution;

