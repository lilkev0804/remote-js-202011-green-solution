import { bubble as Menu } from 'react-burger-menu'
import React from "react";
import './BurgerMenu.css';


class BurgerMenu extends React.Component {
  render () {
    return (

      <Menu className="menu-burger" left width={ '200px' } >
        <h4 className="menu-item1" href="#">Home</h4>
        <h4 className="menu-item2" href="#">Calculator</h4>
        <h4 className="menu-item3" href="#">Solutions</h4>
        <h4 className="menu-item4" href="#">About Us</h4>
      </Menu>
    );
  }
}
export default BurgerMenu