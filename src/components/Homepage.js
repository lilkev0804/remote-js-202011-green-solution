import React from 'react';
import ConnexionBtn from './ConnexionBtn';
import SimulatorBtn from './SimulatorBtn';
import "./Homepage.css";
import HomepageBg from './HomepageBg';

function Homepage() {
    return (
        <div className="homepage">
            <h1 className="homepage-title">Réduisez votre empreinte carbone</h1> 
            <HomepageBg />
            <h4 className="textHomepage">Le temps est venu de connaître l'empreinte carbone de votre entreprise de transport.</h4>
            <div className="homepage-btn">
                <SimulatorBtn />
                <ConnexionBtn />
            </div>
            
        </div>
    )
}

export default Homepage;