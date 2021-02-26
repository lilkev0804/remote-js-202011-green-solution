import React from 'react';
import {Link} from "react-router-dom";
import MapLeaflet from './MapLeaflet'
import axios from 'axios';

import './calculator.css';


class Calculator extends React.Component {
  state = {
    emissionFactors: "",
    selectEmissionFactors: "",
    distance: "",
    weight: "",
    camions: "",
  };

  handleClick = (event) => {
    this.setState({ selectEmissionFactors: event.target.value });
  };

  handleChangeInfo = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = async () => {
    const request = await axios.get(
      "https://koumoul.com/s/data-fair/api/v1/datasets/base-carbone(r)/values_agg?field=Nom_base_fran%C3%A7ais&format=json&agg_size=20&q=camion&q_mode=complete&size=20&select=&highlight="
    );
    await this.setState({
      camions: request.data.aggs,
    });
    const vehicules = [];
    this.state.camions.map((camion) =>
      camion.results.filter((result) =>
        result["Identifiant_de_l'élément"].includes("21066") ||
        result["Identifiant_de_l'élément"].includes("21074") ||
        result["Identifiant_de_l'élément"].includes("21052") ||
        result["Identifiant_de_l'élément"].includes("28023")
          ? vehicules.push(result.Total_poste_non_décomposé)
          : ""
      )
    );
    this.setState({
      emissionFactors: vehicules,
    });
  };

  render() {
    return (
      <div className="ContainerCalculator">
        <h1 className="calculatorTitle">Calculons !</h1>
        <div className="calculatorBloc">
          <div>
            <h2 className="calculator-titleBox">{this.props.title}</h2>
            <div className="inputBoxVehicule">
              <label for="vehicume" className="calculator-titleBox">
                Choix du véhicule :{" "}
              </label>
              <select
                name="vehicule"
                id="vehiculeSelect"
                onClick={this.handleClick}
                className="vehiculeList"
              >
                <option
                  className="vehiculeList"
                  value={this.state.emissionFactors[9]}
                >
                  Vehicule utilitaire 3,5T
                </option>
                <option
                  className="vehiculeList"
                  value={this.state.emissionFactors[0]}
                >
                  Poids lourd 19T
                </option>
                <option
                  className="vehiculeList"
                  value={this.state.emissionFactors[1]}
                >
                  Poids lourd 26T
                </option>
                <option
                  className="vehiculeList"
                  value={this.state.emissionFactors[2]}
                >
                  Poids lourd 40T
                </option>
              </select>
            </div>
            <div>
              <div className="inputUserBlock">
                <label for="distance" className="calculator-titleBox">
                  Distance :{" "}
                </label>
                <div className="inputUserkm">
                  <input
                    name="distance"
                    className="calculator-input"
                    id="kmInput"
                    value={this.state.distance}
                    placeholder="Km"
                    onChange={this.handleChangeInfo}
                    required
                  />
                </div>
              </div>
              <div className="inputUserBlock">
                <label for="poids" className="calculator-titleBox">
                  Poids de la marchandise :{" "}
                </label>
                <div className="inputUserkm">
                  <input
                    name="weight"
                    className="calculator-input"
                    id="inputWeight"
                    value={this.state.weight}
                    onChange={this.handleChangeInfo}
                    placeholder="Tonnes"
                    required
                  />
                </div>
              </div>
              <div className="validationSection">
                <div className="validationTitle">
                  Calculer mon empreinte carbone
                </div>
                <Link
                  className="calculator-bouton"
                  to={{
                    pathname: `/Result`,
                    data: {
                      selectEmissionFactors: this.state.selectEmissionFactors,
                      distance: this.state.distance,
                      weight: this.state.weight,
                    },
                  }}
                >
                  Valider
                </Link>
              </div>
              <MapLeaflet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
