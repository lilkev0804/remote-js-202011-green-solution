import React from "react";
import Coordonnées from "./Coordonnées";
import Presentation from "./Presentation";
import Info from "./Info";
import MailForm from "./MailForm";
import Titre from "./Titre";
import "../App.css";

const Aboutus = () => {
  return (
    <div className="App">
      <Titre />
      <Presentation equipeName="Raphaëlle, Rachelle, Ingrid, Alex, Aurélien, Kévin, Marc" />
      <Info />
  
    </div>
  );
};

export default Aboutus;
