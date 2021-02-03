import './App.css';
import Aboutus from "./screen/Aboutus";
import BodyResult from './components/BodyResult';
import BurgerMenu from './components/BurgerMenu.js';
import Calculator from './components/Calculator';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Homepage from "./components/Homepage";
import Header from './components/Header';
import React from "react";
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">

      <BurgerMenu/>

      <Header/>
      <Homepage/>
      <Footer/>

      <Header/>
      <Calculator/>
      <Footer/>
      
      <Header/>
      <BodyResult/>
      <Footer/>

      <Header/>
      <Solutions/>  
      <CardsList/>
      <Footer/>

      <Header/>
      <Aboutus />
      <Footer/>
    </div>
  )
}
export default App;

