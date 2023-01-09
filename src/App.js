import './App.css';
import Footer from './componentes/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cabanas from './componentes/cabanas/Cabanas';
import Galeria from './componentes/galeria/Galeria';


function App() {
  return (
    <>
      <Cabanas />
      <Galeria />
      <Footer />
    </>
  );
}

export default App;
