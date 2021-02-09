import './Header.css'

const Header = () => {
    return <div className="header">
        <img alt="logo Green Solution" src='./img/logo.svg'></img>
        <p className="header-title-navbar">Green Solution</p>
        <button className="btn-burger">
            <i className="fas fa-bars burger-icon"></i>
        </button>
        <ul className="header-navbar">
            <li className="header-nav-link">home</li>
            <li className="header-nav-link">calculator</li>
            <li className="header-nav-link">simulation</li>
            <li className="header-nav-link">about us</li>
        </ul>
    </div>
}

export default Header