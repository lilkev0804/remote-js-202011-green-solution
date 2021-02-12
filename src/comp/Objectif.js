import React from "react";
import './Objectif.css';

function Objectif(props) {
            return (
                <div className="Objectif">
                    <h10>Pourquoi ?</h10>
                        <p className="Objectif-Texte">{props.texte}</p>
                </div>
    );
} 

export default Objectif;

