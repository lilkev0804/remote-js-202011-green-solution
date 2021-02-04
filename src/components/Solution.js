import React from "react";
import "./Solution.css";
import {Link} from "react-router-dom";

function Solution() {
    return (
      <div className="solution">
        <img className="imgGlobalwarming" src={"image-src/globalwarming.svg"} alt={"globalwarming"} />
        <Link to="/Solutions" style={{textDecoration:'none'}}>
          <input className="solutionbutton" type="text" value={"Des solutions adaptées à vos besoins"}/>
        </Link>
      </div>
    );
  }
  export default Solution;

