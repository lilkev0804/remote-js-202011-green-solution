import React from "react";
import "./Objectif.css";

function Objectif(props) {
            return (
                <div className="Objectif">
                    <h2 className="pourquoi">?</h2>
                        <p className="Objectif-Texte">{props.texte}</p>
                </div>
    );
} 

export default Objectif;
