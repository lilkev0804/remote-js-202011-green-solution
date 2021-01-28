import './App.css';
<<<<<<< HEAD
import Body from './components/BodyResult';
import Result from './components/Result';
import Solution from './components/Solution';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
=======
import Solutions from './components/Solutions'
import CardsList from './components/CardsList'
>>>>>>> d0712b6127cd4878741be03305e3002d38823e5c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Body
        bodytext="Mon émission de CO2 pour le mois de janvier"
      />
      <Result
       logoResult="image-src/logoResult.png"
       logoResult2="image-src/logoResult2.png"
       logoName="logoResult"
       resultText=/*recupérer nombre du calculator*/" 150 T  de  CO2"
      />
      <Solution 
        imgGlobalwarming="image-src/globalwarming.svg"
        name="globalwarming"
        solutionbutton="Des solutions adaptées à vos besoins"
      />
      {/* <Router>
        <Route path="/Solution" exact component={"page solution"}/>
      </Router> */}
=======
      <Solutions />  
      <CardsList />
>>>>>>> d0712b6127cd4878741be03305e3002d38823e5c
    </div>
  );
}

export default App;