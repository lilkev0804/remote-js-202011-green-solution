import React from "react";
import './Objectif.css';

function Objectif(props) {
            return (
                <div className="Objectif">
                    <h2>Pourquoi ?</h2>
                        <p className="Objectif-Texte">{props.texte}</p>
                </div>
    );
} 

export default Objectif;

