import BurgerMenu from './components/BurgerMenu.js'
import React from "react";
import './App.css';
import Aboutus from "./screen/Aboutus";
import Homepage from "./components/Homepage";
import Calculator from './components/Calculator'
import Result from './components/Result';
import Solution from './components/Solution';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/Solutions'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <BurgerMenu />
        <Route path="/Aboutus" exact component={Aboutus}/>
        <Route path="/" exact component={Homepage}/>
        <Route path="/Calculator" exact component={Calculator}/>
        <Route path="/Result"  exact component={Result}
        logoResult="image-src/logoResult.png"
        logoResult2="image-src/logoResult2.png"
        logoName="logoResult"
        resultText=/*recupérer nombre du calculator*/" 150 T  de  CO2"
        />
        <Route path="/Solution" exact component={Solution} 
          imgGlobalwarming="image-src/globalwarming.svg"
          name="globalwarming"
          solutionbutton="Des solutions adaptées à vos besoins"
        /> 
        <Footer />
      </Router>
    </div>
  );
}
export default App;