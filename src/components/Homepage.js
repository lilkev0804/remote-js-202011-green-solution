import React from "react";
import ConnexionBtn from "./ConnexionBtn";
import SimulatorBtn from "./SimulatorBtn";
import styled from "styled-components";
import "./Homepage.css";

const Background = styled.section`
  background-image: url("./imgHomepage/homepageBg.jpg");
  background-size: cover;
  background-position: center;
`;

function Homepage() {
  return (
    <div className="homepage">
      <Background className="imgHomepage2">
        <div className="desktop">
          <h1 className="homepage-title">Réduisez votre empreinte carbone</h1>
          <img
            className="imgHomepage"
            src="imgHomepage/homepageBg.jpg"
            alt="road landscape"
          />
          <h4 className="textHomepage">
            Le temps est venu de connaître l'empreinte carbone de votre
            entreprise de transport.
          </h4>
          <div className="homepage-btn">
            <SimulatorBtn />
            <ConnexionBtn />
          </div>
        </div>
      </Background>
    </div>
  );
}

export default Homepage;
