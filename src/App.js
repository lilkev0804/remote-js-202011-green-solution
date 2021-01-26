import './App.css';
import Body from "./components/Body";
import Result from './components/Result';
import Solution from "./components/Solution";

function App() {
  return (
    <div className="App">
      <Body
        bodytext="Mon émission de CO2 pour le mois de janvier"
      />
      <Result
       logoResult="image-src/logoResult.png"
       logoName="logoResult"
       resultText="   150 T  de  CO2"
      />
      <Solution 
        imgGlobalwarming="image-src/globalwarming.svg"
        name="globalwarming"
        solutionbutton="Des solutions adaptées à vos besoins"
      />
    </div>
  );
}

export default App;