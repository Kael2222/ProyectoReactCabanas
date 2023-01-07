import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Cabanas from './componentes/cabanas/Cabanas';
import Slider from './componentes/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Cabanas />
      <Footer />
    </div>
  );
}

export default App;
