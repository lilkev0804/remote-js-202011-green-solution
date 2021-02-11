import React,{ Component } from "react";
import './Coordonnées.css';
import {Link} from "react-router-dom";

class Coordonnées extends Component {
  constructor(props){
    super(props); 
    this.state={
      toggle:"visible"
    }
  } 
   render (){
    return (
      <div className={`Coordonnées ${this.state.toggle}`}>
        <i className="fas fa-address-card fa-50x"></i>
          <p>Siège social
          GREEN SOLUTION
          55 Rue du Faubourg St Honoré
          75008 PARIS</p>
        <i className="fas fa-phone-square"></i>
            <p>01.42.92.81.00</p>
        <i className="fab fa-internet-explorer"></i>
            <p>https://www.greensolution.fr</p>
        <i class="far fa-envelope"></i>
            <p>
            <Link to="/Contact" style={{textDecoration:'none'}}>
            <button className="CoordonnéesButton">Envoyer un mail</button>   
            </Link>
            </p>
      </div>
                           
)
  }
}

export default Coordonnées;