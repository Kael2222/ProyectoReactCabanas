import CabinIcon from '@mui/icons-material/Cabin';
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav className="container-fluid bg-light">
        <div className="wrapper">
            <div className="left"> 
                <CabinIcon />
            </div>
            <div className="right">
                <div className="item"><a href="#inicio" className="nav-link p-0 text-muted">Inicio</a></div>
                <div className="item"><a href="#servicios" className="nav-link p-0 text-muted">Servicios</a></div>
                <div className="item"><a href="#cabanas" className="nav-link p-0 text-muted">Cabañas</a></div>
                <div className="item"><a href="#testimonios" className="nav-link p-0 text-muted">Testimonios</a></div>
                <div className="item"><a href="#ubicacion" className="nav-link p-0 text-muted">Ubicación</a></div>
                <div className="item"><a href="#contacto" className="nav-link p-0 text-muted">Contacto</a></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
