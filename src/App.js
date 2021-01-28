import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/Solutions'
import CardsList from './components/CardsList'

function App() {
  return (
    <div className="App">
      <Header />
      <Solutions />  
      <CardsList />
      <Footer />
    </div>
  );
}

export default App;
