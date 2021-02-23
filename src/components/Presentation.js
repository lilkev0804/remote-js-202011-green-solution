import React from "react";
import "./Presentation.css";
import PropTypes from "prop-types";

function Presentation(props) {
  return (
    <div className="presentationProjet">
    <div className="Equipe">
      <h2 className="titlePres">L'équipe</h2>
      <br/>
      <p className="equipeName">{props.equipeName}</p>
      <img
        className="Equipe-Image1"
        src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_960_720.png"
        alt="illustration de l'équipe"
      />
    </div>
      <div className="Objectif">
          <h2 className="titlePres">L'objectif</h2>
          <br />
          <p className="Objectif-Texte">Green Solution a été créée en 2021.
        Cette association est composée de 7 élèves de la Wild Code School. Ils se sont associés dans le but de développer une application qui permet aux transporteurs de calculer leur empreinte carbone. </p><br />
        <p className="Objectif-Texte">Chez Green Solution, nous sommes à l'écoute des petites entreprises et de leurs besoins.</p>
      </div>
    </div>
  );
}


export default Presentation;
