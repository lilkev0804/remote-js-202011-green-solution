import React from "react";
import './Info.css';


          function Info() {
            return (
              <div className="Info">
                <div className="Info-Texte3">
                  <h2>Vous souhaitez en savoir encore plus ? Nous contacter ? C'est par ici...</h2>
                </div>
                <div className="Info-Image3">
                  <img 
                  src="https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                   alt="?"
                  />
                   <div className="Info-container-button">
                    <button className="Info-Button3">Nos coordonnées</button> 
                  </div>
                </div>   
              </div>           
    );
}

export default Info;
