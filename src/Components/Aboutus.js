import React from "react";
import Coordonnées from './Coordonnées';
import Equipe from './Equipe';
import Objectif from './Objectif';
import Titre from './Titre';
import '../App.css';


const Aboutus=() => {
  return (
    <div className="App">
      <Titre />
      <Equipe 
        equipeName="Raphaëlle, Rachele, Ingrid, Alex, Aurélien, Kévin, Marc" 
      />
      <Objectif 
        texte="Green Solution a été créée en 2021.
        Cette association, à but non lucratif, est composée de 7 élèves de la Wild Code School, qui se sont associés pour un premier projet.
        Développer une application, pour permetre aux petits transporteurs de calculer leur empreinte carbone.
        Car chez Green Solution, nous sommes des professionnels du dev, mais nous aimons aussi le développement durable."
      />
      <Coordonnées />
    </div>
    
  );
}

export default Aboutus;