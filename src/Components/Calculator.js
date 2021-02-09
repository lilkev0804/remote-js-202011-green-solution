import React from 'react';
import axios from 'axios';
import './calculator.css';

class Calculator extends React.Component {

    state = {
        emissionFactors: "",
        distance: "" ,
        weight: "" ,
        camions: "",
        total: ""
    }
    handleClick = (event) => {
        this.setState({emissionFactors: event.target.value})
    }
    handleChangeInfo = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    componentDidMount = async() => {
        const request = await axios.get("https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight=")
            await this.setState({
                camions : request.data.aggs
            })
            const vehicules = []

            this.state.camions.map(camion => (
                camion.results.filter(result => (
                    result._id.includes('RdisV3cByp8JMdcMFIHw') || result._id.includes('SdisV3cByp8JMdcMFIHw') || result._id.includes('GdisV3cByp8JMdcMFIHw') || result._id.includes('kNisV3cByp8JMdcMg7Pf') ? vehicules.push(result.Total_poste_non_décomposé) : ""
                    )
                )
            )
            )
            this.setState({
                emissionFactors : vehicules
            })
    }

    catchValue = () => {
        const vehicule = parseFloat(document.querySelector('#vehiculeSelect').value.replace(',' , "."))
        const inputKm = parseInt(document.querySelector('#kmInput').value)
        const inputWeight = parseInt(document.querySelector('#inputWeight').value)
        const total = vehicule *  inputKm * inputWeight
        this.setState({total: total})
    } 

    render() { 
        return (
            <div>
                <h1 className="calculatorTitle">Calculons !</h1>
                <div className= "calculatorBloc">
                    <div>
                        <h2 className="calculator-titleBox">{this.props.title}</h2>
                        <div className= "inputBoxVehicule">
                        <select name="vehicule" id="vehiculeSelect" className="vehiculeList" >
                            <option className="vehiculeList" value={this.state.emissionFactors[3]} >Vehicule utilitaire 3,5T</option> 
                            <option className="vehiculeList" value={this.state.emissionFactors[0]} >Poids lourd 19T</option>
                            <option className="vehiculeList" value={this.state.emissionFactors[1]} >Poids lourd 26T</option>
                            <option className="vehiculeList" value={this.state.emissionFactors[2]} >Poids lourd 40T</option>
                        </select>
                        </div>
                        <div method="get">
                            <div>
                                <label for="distance" className="calculator-titleBox">Distance : </label>
                                <input name='distance' className="calculator-input" id="kmInput" value={this.state.distance} onChange={this.handleChangeInfo} required/>
                                <p className="calculator-units">Km</p> 
                            </div>
                            <div>
                                <label for="poids" className="calculator-titleBox">Poids de la marchandise : </label>
                                <input name="weight" className="calculator-input" id="inputWeight" value={this.state.weight} onChange={this.handleChangeInfo} required/>
                                <p className="calculator-units">Kg</p>
                            </div>
                            <div className="validationSection">
                                <div className="validationTitle">Calculer mon empreinte carbone</div>
                                <button className="calculator-bouton" onClick={(e) => this.catchValue(e)}>Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }   
}

export default Calculator
