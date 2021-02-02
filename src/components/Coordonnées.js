import React from "react";
import './Coordonnées.css';

function Coordonnées() {
    return (
        <div className="Coordonnées">
          <i className="fas fa-address-card"></i>
            <p>Siège social
            GREEN SOLUTION
            55 Rue du Faubourg St Honoré
            75008 PARIS</p>
          <i className="fas fa-phone-square"></i>
              <p>01.42.92.81.00</p>
          <i className="fab fa-internet-explorer"></i>
              <p>https://www.greensolution.fr</p>
          <i class="far fa-envelope"></i>
              <p>
                <button className="CoordonnéesButton">Envoyer un mail</button>
              </p>
        </div>
                      
            
          
)
}

export default Coordonnées;