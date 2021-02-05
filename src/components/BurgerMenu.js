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

<<<<<<< HEAD
      <Menu className="menu-burger" right width={ '200px' } disableAutoFocus disableOverlay>

        <a className="menu-item1" href="#">Home</a>
        <a className="menu-item2" href="#">Calculator</a>
        <a className="menu-item3" href="#">Solutions</a>
        <a className="menu-item4" href="#">About Us</a>
=======
      <Menu className="menu-burger" left width={ '200px' } >
        <Link to="/" style={{textDecoration:'none'}}>
          <a className="menu-item1"  href="#">Home</a>
        </Link>
        <Link to="/Calculator" style={{textDecoration:'none'}}>
          <a className="menu-item2" href="#">Calculator</a>
        </Link>
        <Link to="/Solutions" style={{textDecoration:'none'}}>
          <a className="menu-item3" href="#">Solutions</a>
        </Link>
        <Link to="/Aboutus" style={{textDecoration:'none'}}>
          <a className="menu-item4" href="#">About Us</a>
        </Link>
>>>>>>> dev

      </Menu>
    );
  }
}
export default BurgerMenu
