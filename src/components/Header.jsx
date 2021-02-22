import './Header.css'
import {Link} from "react-router-dom";
import BurgerMenu from "./BurgerMenu"


const Header = (props) => {
    return <div className="header">
        <img alt="logo Green Solution" src='./img/logo.svg'></img>
        <p className="header-title-navbar">Green Solution</p>
        <BurgerMenu></BurgerMenu>
        <ul className="header-navbar">
            <Link to="/" style={{textDecoration:'none'}}>
                <li className="header-nav-link">Accueil</li>
            </Link>
            <Link to="/Calculator" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">Simulateur</li>
            </Link>
            <Link to="/Solutions" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">Solutions</li>
            </Link>
            <Link to="/Aboutus" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">A propos</li>
            </Link>
            <Link to="/login" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">Votre espace</li>
            </Link>
        </ul>
    </div>
}

export default Header