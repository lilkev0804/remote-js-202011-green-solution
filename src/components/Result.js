import React from "react"
import "./Result.css"

class Result extends React.Component {
  state = {
    total: ''
  }
  catchValue = (selectEmissionFactors, distance, weight) => {
    const vehicule = selectEmissionFactors.replace(',' , ".")
    const inputKm = distance.replace(',' , ".")
    const inputWeight = weight.replace(',' , ".")
    const userResult = vehicule * inputKm * inputWeight
    this.setState({total: userResult})
  } 

  componentDidMount() {
    const {selectEmissionFactors, distance, weight} = this.props.location.data
    this.catchValue(selectEmissionFactors, distance, weight)
  }

  render() {
    return (
      <div className="result">
        {/* <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? props.logoResult : props.logoResult2} alt={props.logoName} /> */}
        <p>{this.state.total} </p>
      </div>
    );
  }
}
export default Result;