import { bubble as Menu } from 'react-burger-menu'
import React from "react";
import './BurgerMenu.css';
import {Link} from "react-router-dom";

class BurgerMenu extends React.Component {
  render () {
    return (

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

      </Menu>
    );
  }
}
export default BurgerMenu