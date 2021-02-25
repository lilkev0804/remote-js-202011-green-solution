import React from "react";
import Presentation from "./Presentation";
import Info from "./Info";
import Titre from "./Titre";
import "../App.css";

const Aboutus = () => {
  return (
    <div className="App">
      <Titre />
      <Presentation equipeName="Raphaëlle, Rachel, Ingrid, Alex, Aurélien, Kévin, Marc" />
      <Info />
  
    </div>
  );
};

export default Aboutus;
