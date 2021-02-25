import React from "react";
import "./Solution.css";
import { Link } from "react-router-dom";
import Result from "./Result"

function Solution(props) {
    return (
      <div className="solution">
        <img className="image-result" src={`image-src/${props.image}`} alt={"image-result"} />
        <Link className="solutionbutton" type="text" to="/Solutions">
              Des solutions adaptées à vos besoins
        </Link>
      </div>
    );
  }
  export default Solution;

