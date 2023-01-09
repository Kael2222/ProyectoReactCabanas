import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/Header';
import Cabanas from './componentes/cabanas/Cabanas';
import Slider from './componentes/slider/Slider';
import Galeria from './componentes/galeria/Galeria'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Cabanas />
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
