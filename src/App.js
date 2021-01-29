import './App.css';
import BodyResult from './components/BodyResult';
import Calculator from './components/Calculator';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Homepage from "./components/Homepage";
import Header from './components/Header';
import Solutions from './components/Solutions';


function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>

      <Header/>
      <Calculator/>
      <Footer/>
      
      <Header/>
      <BodyResult/>
      <Footer/>

      <Header/>
      <Solutions/>  
      <CardsList/>
      <Footer/>
    </div>
  )
}
export default App;

