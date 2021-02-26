import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Arrow(props) {
    const {className, onClick, style} = props;
    return (
        <div className={className}
        style={{...style, display: "block", fontSize: "40px"}}
        onClick={onClick}/>
    );
}

const photos = [
    {
        name: 'Photo 1',
        url: "imgCarousel/photo1.jpg",
        alt: "parking with truck",
        text: "Explorez toutes nos solutions",
        value: "all",
        id : "0"
    },
    {
        name: 'Photo 2',
        url: "imgCarousel/photo2.jpg",
        alt: "truck on a moutain road",
        text: "Changez la logistique de votre entreprise",
        value: "logistics",
        id : "1"
    },
    {
        name: 'Photo 3',
        url: "imgCarousel/photo3.jpg",
        alt: "truck on a highway",
        text: "Pensez à d'autres moyens de transports",
        value: "types",
        id : "2"
    },
    {
        name: 'Photo 4',
        url: "imgCarousel/photo4.jpg",
        alt: "truck by night",
        text: "Différents programmes écologiques",
        value: "programmes",
        id : "3"
    },
    {
        name: 'Photo 5',
        url: "imgCarousel/photo5.jpg",
        alt: "truck in black and white",
        text: "Tournez vous vers les innovations",
        value: "innovations",
        id : "4"
    }
] 


class Carousel extends Component {

            

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            accessibility: true,
            arrows: true,
            prevArrow: <Arrow to="prev" />,
            nextArrow: <Arrow to="next" />,
            slidesToScroll: 1,
            className: "slides"
        };
        return (
            <div className="carouselHead">
                <Slider {...settings}>
                
                {photos.map((photo, index) => (
                    <div key={photo.id} className="carouselTest" >
                        <img width="100%" height="440px" src={photo.url} alt={photo.alt}/>
                            <Link 
                            
                            className="carouselLink" 
                            type="img" 
                            to={{
                                pathname: `/Solutions`,
                                data: {
                                  valueOfIndex : photo.id
                                },
                              }}
                            >
                            
                            <h1 className="carouselText">{photo.text}</h1>
                            </Link>
                       
                    </div>
                ))}
                </Slider>
            </div>
        )
    }
}

export default Carousel;
