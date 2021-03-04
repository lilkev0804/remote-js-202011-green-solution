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
        <div className={`container-burger ${iconBurger ? '' : 'invisible '}` }>
          <Link className="menu-item"   to="/" onClick={() => setIconBurger(false)}>
            Accueil
          </Link>
          <Link className="menu-item"  to="/Calculator" onClick={() => setIconBurger(false)}>
            Simulateur
          </Link>
          <Link
            className="menu-item"
            to="/Solutions"
            onClick={() => setIconBurger(false)}
          >
            Solutions
          </Link>
          <Link className="menu-item"  to="/Aboutus" onClick={() => setIconBurger(false)}>
            A propos
          </Link>
          <Link className="menu-item"  to="/login" onClick={() => setIconBurger(false)}>
            Connexion
          </Link>
      </div>
    </div>
  )
}
