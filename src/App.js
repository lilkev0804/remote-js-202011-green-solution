import './App.css';
import Aboutus from "./test/Aboutus";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BurgerMenu from './test/BurgerMenu';
import Calculator from './test/Calculator';
import Coordonnées from './test/Coordonnées';
import Footer from './test/Footer';
import Homepage from "./test/Homepage";
import Header from './test/Header';
import LegalNotice from './test/LegalNotice'
import MailForm from './test/MailForm';
import SignIn from './test/SignIn'
import React from "react";
import Result from './test/Result';
import SignUp from './test/SignUp'
import Solutions from './test/Solutions';
import UserPage from './test/UserPage'
import {AuthProvider} from "./Auth";
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <AuthProvider>

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
        <Route path="/login" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <PrivateRoute path="/userpage" component={UserPage}/>
        <Footer />
      </Router>
    </div>
    </AuthProvider>
  );
}
export default App;

