import React from "react";
import './Equipe.css';
import PropTypes from "prop-types";

function Equipe(props) {
            return (
              <div className="Equipe">
                <div className="Equipe-Texte1">
                    <p className="equipeName">{props.equipeName}</p>
                </div>
                  <img className="Equipe-Image1"
                  src="https://tse1.mm.bing.net/th?id=OIP.1kTLSSnMGWoxOTdy9__bTAHaHa&pid=Api&P=0&w=300&h=300"
                   alt="illustration de l'équipe"
                   />
              </div>         
    );
} 

Equipe.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Equipe;
