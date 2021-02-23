import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import BodyResult from "./BodyResult" 
import Solution from "./Solution";



import "./Result.css";



function Result (props) {
  const [total, setTotal] = useState('')
  const [visible, setVisible] = useState('invisible')
  const [invisible, setInvisible] = useState('visible')

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
      setTimeout(() => {
        setVisible('visible')
        setInvisible('invisible')
      }, 4000)
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
      <div className={`discover-text ${invisible}`}>
        Découvrons votre score et voyons si vous pouvez faire mieux . . .
      </div>
      <div className={`result ${visible}`}>
        <img className={resultCalc ? "logoResult" : "logoResult2"} src={resultCalc ? logoResult : logoResult2} alt={"coloration button for result is good or bad"} />
        <p className="resultText">{total} KgCO2 </p>
      </div>
      <p className={`score-text ${visible}`}>{resultCalc ? <p className="score-text">Oups... Vous pouvez faire mieux!<br></br><br></br>Cliquez sur le bouton ci-dessous pour découvrir des solutions pour améliorer votre score</p> : "C'est super! Ne nous arrêtons pas là car on peut toujours faire mieux... Cliquez sur le bouton ci-dessous pour découvrir des solutions pour améliorer votre score"}</p>
        <Solution/>
      </div>
        );
    }
    
    export default Result;
