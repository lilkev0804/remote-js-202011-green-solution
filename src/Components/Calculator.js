import React from 'react';
import './calculator.css';
import TableInput from './TableInput';
import Vehicule from './Vehicule';
import {Link} from "react-router-dom";

class Calculator extends React.Component {
    render() { 
        return (
            <div>
                <h1 className="calculatorTitle">Calculons !</h1>
                <div className= "calculatorBloc">
                    <Vehicule title="Type de vehicule" />
                    <TableInput title="Distance" units="Km"/>
                    <TableInput title="Poids de la marchandise" units="Kg"/>
                    <div className="validationSection">
                        <div className="validationTitle">Calculer mon empreinte carbone</div>
                        <Link to="/Result" style={{textDecoration:'none'}}>
                            <button className="boutonValidation">Validation</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Calculator;