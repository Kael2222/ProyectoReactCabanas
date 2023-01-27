import {useState} from 'react';
import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/Header';
import Cabanas from './componentes/cabanas/Cabanas';
import Slider from './componentes/Slider/Slider';
import Galeria from './componentes/galeria/Galeria'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from './componentes/form/Form';
import Mapa from './componentes/mapa/Mapa';
import Testimonios from './componentes/testimonios/Testimonios';
import Servicios from './componentes/servicios/Servicios';
import React from 'react';




function App() {
  
  const [isModalOpen, setIsModalOpen] =useState(false)
  return (
    <div className={`App ${isModalOpen ? "scrollDisabled" : "scroll"}`}>
      <Header />
      <Slider />
      <Cabanas />
      <Galeria setIsModalOpen={setIsModalOpen}/>
      <Mapa />
      <Servicios />
      <Testimonios />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
