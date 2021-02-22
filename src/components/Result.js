import BodyResult from "./BodyResult";
import Solution from "./Solution";
import React from "react";
import "./Result.css";

class Result extends React.Component {
  state = {
    total: "",
  };
  catchValue = (selectEmissionFactors, distance, weight) => {
    const vehicule = selectEmissionFactors.replace(",", ".");
    const inputKm = distance.replace(",", ".");
    const inputWeight = weight.replace(",", ".");
    const userResult = vehicule * inputKm * inputWeight;
    this.setState({ total: userResult });
  };

  componentDidMount() {
    const {
      selectEmissionFactors,
      distance,
      weight,
    } = this.props.location.data;
    this.catchValue(selectEmissionFactors, distance, weight);
  }

  render() {
    const logoResult = "image-src/logoResult.png";
    const logoResult2 = "image-src/logoResult2.png";
    let resultCalc = this.state.total > 150;

    return (
      <div>
        <BodyResult />
        <div className="result">
          <img
            className={resultCalc ? "logoResult" : "logoResult2"}
            src={resultCalc ? logoResult : logoResult2}
            alt={"coloration button for result is good or bad"}
          />
          <p className="resultText">{this.state.total} </p>
        </div>
        <Solution />
      </div>
    );
  }
}

export default Result;
