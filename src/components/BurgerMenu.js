// import React from "react";
// import { bubble as Menu } from "react-burger-menu";
// import CustomIcon from 'react-burger-menu'
// import "./BurgerMenu.css";
// import { Link } from "react-router-dom";

// class BurgerMenu extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       menuOpen: false
//     }
//   }
//   handleStateChange (state) {
//     this.setState({menuOpen: state.isOpen})  
//   }

//   closeMenu () {
//     this.setState({menuOpen: false})
//   }

//   // toggleMenu () {
//   //   this.setState(state => ({menuOpen: !state.menuOpen}))
//   // }

//   showSettings(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="container-burger-menu">
//       <div className={this.state.menuOpen ? "menu-burger" : "menuInvisible"} right width={ '200px' } style={{position:'absolute'}} isOpen={this.state.menuOpen}
//       onStateChange={(state) => this.handleStateChange(state)}>
//         <Link className="menu-item"  to="/" onClick={() => this.closeMenu()}>
//           Accueil
//         </Link>
//         <Link className="menu-item" to="/Calculator" onClick={() => this.closeMenu()}>
//           Simulateur
//         </Link>
//         <Link
//           className="menu-item"
//           to="/Solutions"
//           onClick={() => this.closeMenu()}
//         >
//           Solutions
//         </Link>
//         <Link className="menu-item" to="/Aboutus" onClick={() => this.closeMenu()}>
//           A propos
//         </Link>
//         <Link className="menu-item" to="/login" onClick={() => this.closeMenu()}>
//           Connexion
//         </Link>
//       </div>
//       {/* <CustomIcon onClick={() => this.toggleMenu()} /> */}
//       </div>
//     );
//   }
// }
// export default BurgerMenu;
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './BurgerMenu.css'

export default function BurgerMenu() {
  const [iconBurger, setIconBurger] = useState(false)

  
  const handleClick =() => {
    setIconBurger(!iconBurger)
  }

  return (
    <div className="Menu-Icon">
      <span onClick={handleClick} className={`open-menu`}>{iconBurger} <img className="burgerIcon" src={`img/${iconBurger ? "close.svg" : "menu.svg"}`} alt='logo menu'></img></span>
        <div className={`container-burger ${iconBurger ? '' : 'invisible'}` }>
          <Link className="menu-item"  to="/" onClick={() => setIconBurger(false)}>
            Accueil
          </Link>
          <Link className="menu-item" to="/Calculator" onClick={() => setIconBurger(false)}>
            Simulateur
          </Link>
          <Link
            className="menu-item"
            to="/Solutions"
            onClick={() => setIconBurger(false)}
          >
            Solutions
          </Link>
          <Link className="menu-item" to="/Aboutus" onClick={() => setIconBurger(false)}>
            A propos
          </Link>
          <Link className="menu-item" to="/login" onClick={() => setIconBurger(false)}>
            Connexion
          </Link>
      </div>
    </div>
  )
}
