import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';

const photos = [
    {
        name: 'Photo 1',
        url: "imgCarousel/photo1.jpg",
        alt: "parking with truck",
        text: "Explorez toutes nos solutions"
    },
    {
        name: 'Photo 2',
        url: "imgCarousel/photo2.jpg",
        alt: "truck on a moutain road",
        text: "Changez la logistique de votre entreprise"
    },
    {
        name: 'Photo 3',
        url: "imgCarousel/photo3.jpg",
        alt: "truck on a highway",
        text: "Pensez à d'autres moyens de transports"
    },
    {
        name: 'Photo 4',
        url: "imgCarousel/photo4.jpg",
        alt: "truck by night",
        text: "Différents programmes écologiques"
    },
    {
        name: 'Photo 5',
        url: "imgCarousel/photo5.jpg",
        alt: "truck in black and white",
        text: "Tournez vous vers les innovations"
    }
]



const Carousel = () => {
    const [activeImg, setActiveImg] = useState('')
    const [position, setPosition] = useState('0')
    




        return (
            <div className="carouselHead">
                {photos.map((photo,index) => 
                     (
                        <div 
                        className="slides" 
                        id={`caption-${index}`} >
                            <Link className="carouselLink" type="img" to={`/Solutions/${index}`}>
                            <img className='imgCarousel' src={photo.url} alt={photo.alt}/>
                                <h1 className="carouselText">{photo.text}</h1>
                            </Link>
                        </div>
                    )
                )}
            </div>
        )

}

export default Carousel;
