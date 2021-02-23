import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

          function Info(props) {
            return (
              <div className="Info">
                <div className="Info-Image3">
                  <img className="Image3-info"
                  src="https://tse1.mm.bing.net/th?id=OIP.4lSAsD0OmO--1glXTyF-lgHaDt&pid=Api&P=0&w=333&h=167"
                   alt="?"
                  />
                <div className="Info-container-button">
                    <Link to="/Form" style={{textDecoration:'none'}}>
                      <button className="Info-Button3">Envoyer un mail</button> 
                    </Link>
                  </div>
              </div>   

                <div className="coordonnees">
                  <div  className="coordonnees-box">
                  <i className="fas fa-address-card fa-50x"></i>
                   <p>Siège social
                      GREEN SOLUTION
                      55 Rue du Faubourg St Honoré
                      75008 PARIS</p>
                  </div>
                  <div className="coordonnees-box">
                    <i className="fas fa-phone-square"></i>
                      <p>01.42.92.81.00</p>
                  </div>
                  <div className="coordonnees-box">
                    <i className="fab fa-internet-explorer"></i>
                      <p>https://www.greensolution.fr</p>
                  </div>
                    
                  
      </div>
              </div>           
    );
}

export default Info;
