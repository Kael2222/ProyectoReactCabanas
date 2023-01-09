import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CabinIcon from '@mui/icons-material/Cabin';
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <CabinIcon />
            </div>
            <div className="right">
                <div className="item">
                    <span>Español</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item"><a href='#home' className="nav-link p-0 text-muted">Inicio</a></div>
                <div className="item"><a href='#cabin' className="nav-link p-0 text-muted">Cabañas</a></div>
                <div className="item"><a href='#map' className="nav-link p-0 text-muted">Ubicación</a></div>
                <div className="item"><a href='#contact' className="nav-link p-0 text-muted">Contacto</a></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar