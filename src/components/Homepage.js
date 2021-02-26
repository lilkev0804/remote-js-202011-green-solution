import React from "react";
import ConnexionBtn from "./ConnexionBtn";
import SimulatorBtn from "./SimulatorBtn";
import Carousel from "./Carousel";
import styled from "styled-components";
import "./Homepage.css";

const Background = styled.section`
  background-image: url("./imgHomepage/homepageBg.jpg");
  background-size: cover;
  background-position: center;
  width:100%;
`;

function Homepage() {

  return (
    <div className="homepage">
      <Background className="imgHomepage2">
        <div className="desktop">
          <Carousel />
          <h1 className="homepage-title">Évaluez votre impact écologique</h1>
          <div className="textBtn">
            <div className="homepageIntro">
            <h4 className="textHomepage">
            Le transport routier est le premier emetteur de CO2 en France. <br/>
            Le temps est venu de connaître l'empreinte carbone de votre entreprise de transport : C'est le premier pas vers le changement.
            </h4>
            </div>
            <div className="homepage-btn">
              <SimulatorBtn />
              <ConnexionBtn />
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
}

export default Homepage;
