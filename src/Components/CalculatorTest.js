import React from 'react';
import './calculator.css';
import TableInput from './TableInput';
import ApiRequest from './ApiRequest'
// import ApiRequest from './ApiRequest'

class CalculatorTest extends React.Component {
    // constructor(props){
    //     super(props){
    //         this.state = {
    //             value: props.value
    //         }
           
    //     }
    // }
    state = {
        emissionFactors: "",
        distance: "" ,
        weight: "" ,
    }
    handleClick = (event) => {
        this.setState({emissionFactors: event.target.value})
    }
    handleChangeKm = (event) => {
        this.SetState({distance: event.target.value})
    }

    handleChangeKg = (event) => {
        this.setState({weight: event.target.value})
    }
    
    componentDidMount() {
        this.setState({emissionFactors: ApiRequest()})
        
    
    }
    render() { 
        console.log(this.state)
        return (
            <div>
               
                <h1 className="calculatorTitle">Calculons !</h1>
                <div className= "calculatorBloc">
                    <div>
                        <h2 className="titleBox">{this.props.title}</h2>
                        <div className= "inputBoxVehicule">
                        <select name="vehicule" id="vehiculeSeclect" className="vehiculeList" >
                        <option className="vehiculeList" value="" onClick={this.handleClick}>18t</option> 
                            <option className="vehiculeList" value="Poids lourd 19T" onClick={this.handleClick}>Poids lourd 19T</option>
                            <option className="vehiculeList" value="np" onClick={this.handleClick}>Poids lourd 26T</option>
                            <option className="vehiculeList" value="Poids lourd 40T" onClick={this.handleClick}>Poids lourd 40T</option>
                        </select>
                        </div>
                        <form method="get" class="form-example">
                            <div class="form-example">
                                <label for="distance" className="titleBox">Distance : </label>
                                <input className="input" value={this.state.distance} onChange={this.handleChangeKm} required/>
                                <p className="units">Km</p> 
                            </div>
                            <div class="form-example">
                                <label for="poids" className="titleBox">Poids de la marchandise : </label>
                                <input className="input" value={this.state.weight} onChange={this.handleChangeKg} required/>
                                <p className="units">Kg</p>
                            </div>
                            <div className="validationSection">
                                <div className="validationTitle">Calculer mon empreinte carbone</div>
                                <button className="boutonValidation" type="submit">Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }   
}

export default CalculatorTest

{/* <div>
                        <h2 className="titleBox">Distance</h2>
                        <div className= "inputBox">
                            <input className="input" value={this.state.distance} onChange={this.handleChangeKm}></input>
                            <p className="units">Km</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="titleBox">Poids de la Marchandise</h2>
                        <div className= "inputBox">
                            <input className="input" value={this.state.weight} onChange={this.handleChangeKg}></input>
                            <p className="units">Kg</p>
                        </div>
                    </div> */}