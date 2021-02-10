import './Header.css'
import {Link} from "react-router-dom";
import BurgerMenu from "./BurgerMenu"

const Header = () => {
    return <div className="header">
        <img alt="logo Green Solution" src='./img/logo.svg'></img>
        <p className="header-title-navbar">Green Solution</p>
        <BurgerMenu></BurgerMenu>
        <ul className="header-navbar">
            <Link to="/" style={{textDecoration:'none'}}>
                <li className="header-nav-link">home</li>
            </Link>
            <Link to="/Calculator" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">calculator</li>
            </Link>
            <Link to="/Solutions" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">solutions</li>
            </Link>
            <Link to="/Aboutus" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">about us</li>
            </Link>
            <Link to="/signin" style={{textDecoration:'none'}}> 
                <li className="header-nav-link">Connect</li>
            </Link>
        </ul>
    </div>
}

export default Header