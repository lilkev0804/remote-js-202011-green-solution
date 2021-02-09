import React, {useState, useEffect} from 'react';
import axios from 'axios';


 export default function ApiRequest () {
    const [camions, setCamions] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get("https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight=")
            setCamions(request.data.aggs)
            return request
        }
        fetchData()
    }, [])

   const vehicules = []

    camions.map(camion => (
        camion.results.filter(result => (
            result._id.includes('RdisV3cByp8JMdcMFIHw') || result._id.includes('SdisV3cByp8JMdcMFIHw') || result._id.includes('GdisV3cByp8JMdcMFIHw') || result._id.includes('kNisV3cByp8JMdcMg7Pf') ? vehicules.push(result.Total_poste_non_décomposé) : ""
            )
        )
    ))
    
    return vehicules
}

