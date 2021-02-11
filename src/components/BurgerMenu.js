import React from "react";
import { bubble as Menu } from 'react-burger-menu'

import './BurgerMenu.css';
import {Link} from "react-router-dom";

class BurgerMenu extends React.Component {
  showSettings (event) {
      event.preventDefault();

    }
  render () {
    return (

      <Menu className="menu-burger" right width={ '200px' } >
        <Link className="menu-item1" to="/" style={{textDecoration:'none'}}>
          Home
        </Link>
        <Link className="menu-item2" to="/Calculator" style={{textDecoration:'none'}}>
          Calculator
        </Link>
        <Link className="menu-item3" to="/Solutions" style={{textDecoration:'none'}}>
          Solutions
        </Link>
        <Link className="menu-item4" to="/Aboutus" style={{textDecoration:'none'}}>
          About Us
        </Link>

      </Menu>
    );
  }
}
export default BurgerMenu
