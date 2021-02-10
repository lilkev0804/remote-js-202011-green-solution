import './App.css';
import Aboutus from "./components/Aboutus";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu';
import Calculator from './components/Calculator';
import Coordonnées from './components/Coordonnées';
import Footer from './components/Footer';
import Homepage from "./components/Homepage";
import Header from './components/Header';
import LegalNotice from './components/LegalNotice'
import MailForm from './components/MailForm';
import React from "react";
import Result from './components/Result';
import Solutions from './components/Solutions';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Homepage}/>
        <Route path="/Calculator" component={Calculator}/>
        <Route path="/Result" component={Result}/>
        <Route path="/Solutions" component={Solutions}/> 
        <Route path="/Aboutus" component={Aboutus}/>
        <Route path="/Form" component={MailForm}/> 
        <Route path="/Coordonnees" component={Coordonnées}/> 
        <Route path="/BurgerMenu" component={BurgerMenu}/>
        <Route path="/LegalNotice" component={LegalNotice}/>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

