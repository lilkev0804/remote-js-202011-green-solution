import './App.css';
import Aboutus from "./components/Aboutus";
import BurgerMenu from './components/BurgerMenu.js';
import Calculator from './components/Calculator';
import Coordonnées from './components/Coordonnées'
import Footer from './components/Footer';
import Homepage from "./components/Homepage";
import React from "react";
import BodyResult from './components/BodyResult';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import Solutions from './components/Solutions'
import MailForm from './components/MailForm'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <BurgerMenu />
        <Route path="/" exact component={Homepage}/>
        <Route path="/Calculator" component={Calculator}/>
        <Route path="/Result"  component={BodyResult}/>
        <Route path="/Solutions" component={Solutions}/> 
        <Route path="/Aboutus" component={Aboutus}/>
        <Route path="/Form" component={MailForm}/> 
        <Route path="/Coordonnees" component={Coordonnées}/> 
        <Footer />
      </Router>
    </div>
  );
}
export default App;

