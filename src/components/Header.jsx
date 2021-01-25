import './Header.css'

const Header = () => {
    return <div className="header">
        <img alt="logo Green Solution" src='./img/logo.svg'></img>
        <p className="header-title-navbar">Green Solution</p>
        <button className="btn-burger">
        <i class="fas fa-bars burger-icon"></i>
        </button>
    </div>
}

export default Header