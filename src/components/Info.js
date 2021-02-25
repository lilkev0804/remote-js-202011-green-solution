import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

          function Info(props) {
            return (
              <div className="Info">
              <h2 className="titleContact">Contact</h2>
              <div className="infosTexte">

                <div className="coordonnees">
                  <div className="coordonnees-box">
                    <i className="fas fa-address-card fa"></i>
                    <p className="textInfos">
                      GREEN SOLUTION
                      55 Rue du Faubourg St Honoré
                      75008 PARIS</p>
                  </div>
                  <div className="coordonnees-box">
                    <i className="fas fa-phone-square"></i>
                    <p  className="textInfos">01.42.92.81.00</p>
                  </div>
                  <div className="coordonnees-box">
                    <i className="fab fa-internet-explorer"></i>
                      <p  className="textInfos">https://www.greensolution.fr</p>
                  </div>
                </div>
                
                <img className="Image-info"
                src="https://cdn.pixabay.com/photo/2017/09/16/11/00/icon-2755160_1280.png"
                alt="contact"
                />
              </div>

                <div className="Info-container-button">
                    <Link to="/Form" style={{textDecoration:'none'}}>
                      <button className="Info-Button3">Envoyer un mail</button> 
                    </Link>
                </div>  
        
              </div>           
    );
}

export default Info;
