import React from "react";
import './Equipe.css';
import PropTypes from "prop-types";

function Equipe(props) {
            return (
              <div className="Equipe">
                <div className="Equipe-Texte1">
                  <h2>L'équipe</h2>
                    <p className="Equipe-Texte1-Name">{props.name}</p>
                </div>
                  <img className="Equipe-Image1"
                  src="https://cdn.pixabay.com/photo/2015/08/29/13/04/tech-913034_960_720.jpg"
                   alt="picture of the team"
                   />
              </div>         
    );
} 

Equipe.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Equipe;
