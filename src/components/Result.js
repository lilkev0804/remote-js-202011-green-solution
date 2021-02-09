import React from "react"
import "./Result.css"
import Calculator from './Calculator'


// let resultCalc = 150 > 100

class Result extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        total: ""
      }
    }

  render() {
    return (
      <div>
      <p><Calculator total={this.state.total} /></p>
      </div>
    )};
}

// function Result(props) {
  
//     return (
//       <div className="result">
//         <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? props.logoResult : props.logoResult2} alt={props.logoName} />
//         <p> </p>
//       </div>
//     );
//   }
  export default Result;