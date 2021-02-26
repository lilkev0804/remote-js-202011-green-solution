import "./Footer.css";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    link: "https://www.facebook.com/",
    target: "_blanck",
    icon: <i class="fab fa-facebook ico-social"></i>,
  },
  {
    link: "https://github.com/WildCodeSchool/remote-js-202011-green-solution/tree/dev",
    target: "_blanck",
    icon: <i class="fab fa-github ico-social"></i>,
  },
  {
    link: "https://twitter.com/",
    target: "_blanck",
    icon: <i class="fab fa-twitter ico-social"></i>,
  },
];

const Footer = () => {
    return <div className="footer">
       <div className="footer-container">
       <Link to="/LegalNotice" style={{textDecoration:'none'}}>
            <span className="footer-navlink"> Mentions légales</span>
        </Link>
            <div className="footer-container-social-link">
                {socialLinks.map((socialLink, i) => 
                    <a className="footer-social-link-bg" href={socialLink.link} target={socialLink.target}>{socialLink.icon}</a>
                )}
                </div>
          <Link to="/Coordonnees" style={{textDecoration:'none'}}>
                <span class="footer-navlink"> Contact</span>
          </Link>
       </div>
    </div>
};

export default Footer;
