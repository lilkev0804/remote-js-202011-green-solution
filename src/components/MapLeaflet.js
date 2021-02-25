import React, {useState } from 'react';
import  {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Icon} from "leaflet";
import axios from 'axios'
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import {getDistance} from 'geolib'

import "./MapLeaflet.css"

export default function MapLeaflet () {
    const [cityA, setCityA] = useState(''); 
    const [cityB, setCityB] = useState('');
    const [info, setInfo] = useState([48.866667,2.333333]);
    const [info2, setInfo2] = useState([48.866667,2.333333]);
    const [error, setError] = useState(''); 
    
    
    const dist = getDistance(
        { latitude : info[1], longitude : info[0] },
        { latitude : info2[1], longitude : info2[0] }

      );
      console.log(dist / 1000);
    


    const printValues = () => {
        const test = async () => {
            const resq = await axios(`https://api-adresse.data.gouv.fr/search/?q=${cityA}`)
            const resq2 = await axios(`https://api-adresse.data.gouv.fr/search/?q=${cityB}`)
            
            setInfo(resq.data.features[0].geometry.coordinates)
            setInfo2(resq2.data.features[0].geometry.coordinates)
            
        }
        test();
    }

    // test de marc

const addRoute = () => {
     L.Routing.control  ({
        waypoints: [
            L.latLng(57.74, 11.94),
            L.latLng(57.6792, 11.949)
        ],
        routeWhileDragging: true
    }).addTo(MapContainer);
}


    

    return (
        <div>
            <MapContainer id="mapid" center={[48.866667,2.333333]} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[info[1],info[0]]}></Marker>
                <Marker position={[info2[1],info2[0]]}></Marker>
                {addRoute}
            </MapContainer>
            <h1>Enter an adress</h1>
            <div >
                <label htmlFor="address">Addresse depart: </label>
                <input className="inputCity" 
                    type="text" 
                    value={cityA}
                    onChange={(e) => setCityA(e.target.value)}>
                </input>
                <p>{error}</p>
                <label htmlFor="address">Addresse destination: </label>
                <input className="inputCity" 
                    type="text" 
                    value={cityB}
                    onChange={(e) => setCityB(e.target.value)}>
                </input>
                <p>{error}</p>
                <button  onClick={printValues}>Envoyer</button>
            </div>
            
        
        </div>
    )
}
