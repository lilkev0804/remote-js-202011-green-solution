import './App.css';
import Calculator from './components/Calculator';
import Homepage from "./components/Homepage";
import BodyResult from './components/BodyResult';
import Header from './components/Header';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import CardsList from './components/CardsList';

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

