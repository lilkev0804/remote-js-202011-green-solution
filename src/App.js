import './App.css';
import Aboutus from "./screen/Aboutus";
import BurgerMenu from './components/BurgerMenu.js';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Homepage from "./components/Homepage";
import React from "react";
import BodyResult from './components/BodyResult';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
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
        <Route path="/Result"  exact component={BodyResult}/>
        <Route path="/Solutions" exact component={Solutions}/> 
        <Footer />
      </Router>
    </div>
  );
}
export default App;

