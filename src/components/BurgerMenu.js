import { bubble as Menu } from 'react-burger-menu'
import React from "react";
import './BurgerMenu.css';


class BurgerMenu extends React.Component {
  render () {
    return (

      <Menu className="menu-burger" left width={ '200px' } >

        <a className="menu-item1" href="google.fr">Home</a>
        <a className="menu-item2" href="google.fr">Calculator</a>
        <a className="menu-item3" href="google.fr">Solutions</a>
        <a className="menu-item4" href="google.fr">About Us</a>

      </Menu>
    );
  }
}
export default BurgerMenu