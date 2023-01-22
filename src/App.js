import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/Header';
import Cabanas from './componentes/cabanas/Cabanas';
import Slider from './componentes/slider/Slider';
import Galeria from './componentes/galeria/Galeria'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from './componentes/form/Form';
import Mapa from './componentes/mapa/Mapa';
import Testimonios from './componentes/testimonios/Testimonios';
import Servicios from './componentes/servicios/Servicios';




function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Cabanas />
      <Galeria />
      <Mapa />
      <Servicios />
      <Testimonios />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
