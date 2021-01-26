import React from 'react';
import './Vehicule.css'

class Vehicule extends React.Component {
    render() {return(
        <div>
            <h2 className="titleBox">{this.props.title}</h2>
            <div className= "inputBoxVehicule">
                <select name="vehicule" id="vehiculeSeclect" className="vehiculeList" >
                    <option className="vehiculeList" value="Vehicule Leger">Vehicule leger 3.5T</option>
                    <option className="vehiculeList" value="Poids lourd 19T">Poids lourd 19T</option>
                    <option className="vehiculeList" value="Poids lourd 38T">Poids lourd 38T</option>
                </select>
            </div>
        </div>
        )
    }
}

export default Vehicule