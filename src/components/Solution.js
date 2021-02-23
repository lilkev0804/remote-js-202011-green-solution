import React from "react";
import "./Solution.css";
import { Link } from "react-router-dom";

function Solution() {
    return (
      <div className="solution">
        <img className="image-result" src={"image-src/image result.png"} alt={"image-result"} />
        <Link className="solutionbutton" type="text" to="/Solutions">
              Des solutions adaptées à vos besoins
        </Link>
      </div>
    );
  }
  export default Solution;

