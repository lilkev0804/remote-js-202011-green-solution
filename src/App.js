import BurgerMenu from './components/BurgerMenu.js'
import React from "react";
import './App.css';
import Aboutus from "./screen/Aboutus";
import Homepage from "./components/Homepage";
import Calculator from './components/Calculator'
import Body from './components/BodyResult';
import Result from './components/Result';
import Solution from './components/Solution';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/Solutions'
import CardsList from './components/CardsList'

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <Aboutus />
      <Homepage/>
      <Calculator />
      <Body
        bodytext="Mon émission de CO2 pour le mois de janvier"
      />
      <Result
       logoResult="image-src/logoResult.png"
       logoResult2="image-src/logoResult2.png"
       logoName="logoResult"
       resultText=/*recupérer nombre du calculator*/" 150 T  de  CO2"
      />
      <Solution 
        imgGlobalwarming="image-src/globalwarming.svg"
        name="globalwarming"
        solutionbutton="Des solutions adaptées à vos besoins"
      />
      {/* <Router>
        <Route path="/Solution" exact component={"page solution"}/>
      </Router> */}
 

      <Solutions />  
      <CardsList />
      <Footer />

    </div>
  )
}
export default App;