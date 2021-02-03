import React from "react";
import { bubble as Menu } from 'react-burger-menu'

import './BurgerMenu.css';


class BurgerMenu extends React.Component {
  showSettings (event) {
      event.preventDefault();

    }
  render () {
    return (

      <Menu className="menu-burger" right width={ '250px' } >

        <a className="menu-item1" href="#">Home</a>
        <a className="menu-item2" href="#">Calculator</a>
        <a className="menu-item3" href="#">Solutions</a>
        <a className="menu-item4" href="#">About Us</a>

      </Menu>
    );
  }
}
export default BurgerMenu
