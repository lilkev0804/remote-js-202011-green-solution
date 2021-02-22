import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

function Info(props) {
  return (
    <div className="Info">
      <div className="Info-Image3">
        <img
          className="Image3-info"
          src="https://tse1.mm.bing.net/th?id=OIP.4lSAsD0OmO--1glXTyF-lgHaDt&pid=Api&P=0&w=333&h=167"
          alt="?"
        />
        <div className="Info-container-button">
          <Link to="/Coordonnees" style={{ textDecoration: "none" }}>
            <button className="Info-Button3">Nos coordonnées</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
