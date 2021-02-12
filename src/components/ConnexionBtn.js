import React from 'react';
import "./Homepage.css";
import {Link} from 'react-router-dom'

function ConnexionBtn() {
    return (
        <div className="connexionBtn">
            <Link to="/login" style={{textDecoration:'none'}}> 
            <button className="buttonsHomepage">Connexion</button>
            </Link>
        </div>
    )
}

export default ConnexionBtn;