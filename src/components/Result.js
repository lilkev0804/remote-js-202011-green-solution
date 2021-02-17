import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import BodyResult from "./BodyResult" 
import Solution from "./Solution";

import "./Result.css";



function Result (props) {
  const [total, setTotal] = useState('')
  let history = useHistory();
  const catchValue = (selectEmissionFactors, distance, weight) => {
    const vehicule = selectEmissionFactors.replace(',' , ".")
    const inputKm = distance.replace(',' , ".")
    const inputWeight = weight.replace(',' , ".")
    const userResult = vehicule * inputKm * inputWeight
    setTotal(userResult)
  } 

  useEffect(()=> {
    try{
      const {selectEmissionFactors, distance, weight} = props.location.data 
      catchValue(selectEmissionFactors, distance, weight)
    }catch{
      history.goBack()
    }
  },[])
 

  const logoResult="image-src/logoResult.png";
  const logoResult2="image-src/logoResult2.png";
  let resultCalc= total > 150;

    return (
      <div>
      <BodyResult/>
      <div className="result">
        <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? logoResult : logoResult2} alt={"coloration button for result is good or bad"} />
        <p className="resultText">{total} </p>
      </div>
        <Solution/>
      </div>
        );
    }
    
    export default Result;