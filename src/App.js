import React from "react";
import Titre from './components/Titre';
import Equipe from './components/Equipe';
import Objectif from './components/Objectif';
import Info from './components/Info';
import Coordonnées from './components/Coordonnées';

function App() {
  return (
    <div className="App">
      <Titre />
      <Equipe 
        name="Raphaëlle, Rachelle, Ingrid, Alex, Aurélien, Kévin,Marc" 
      />
      <Objectif />
      <Info />
      <Coordonnées />
    </div>
    
  );
}

export default App;
