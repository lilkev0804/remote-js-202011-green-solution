import './Footer.css'

const socialLinks = [
    {
        link : "facebook.fr",
        target :"_blanck",
        icon : <i class="fab fa-facebook ico-social"></i>
    },
    {
        link : "github.fr",
        target :"_blanck",
        icon : <i class="fab fa-github ico-social"></i>
    },
    {
        link : "twitter.fr",
        target :"_blanck",
        icon : <i class="fab fa-twitter ico-social"></i>
    },

]

const Footer = () => {
    return <div className="footer">
       <div className="footer-container-social-link">
       {socialLinks.map((socialLink, i) => 
            <a className="footer-social-link-bg" href={socialLink.link} target={socialLink.target}>{socialLink.icon}</a>
        )}
       </div>
    </div>
}

export default Footer