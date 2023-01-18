import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../footer/Footer.css"
import CabinIcon from '@mui/icons-material/Cabin';


const Footer = () => {
  return (
    
   
  
    <div className="container-fluid">
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 bg-dark text-white d-flex justify-content-center align-items-center">
      <div className="col ">
        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <CabinIcon />
          <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        </a>
        <p className="text-muted">© 2023</p>
      </div>
      <div className="col mb-3">
      </div>
      <div className="col mb-3">
        <h5>Complejo</h5>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#inicio" className="nav-link p-0 text-muted">Inicio</a></li>
          <li className="nav-item"><a href="#servicios" className="nav-link p-0 text-muted">Servicios</a></li>
          <li className="nav-item"><a href="#cabanas" className="nav-link p-0 text-muted">Cabañas</a></li>
          <li className="nav-item"><a href="#testimonios" className="nav-link p-0 text-muted">Testimonios</a></li>
          <li className="nav-item"><a href="#ubicacion" className="nav-link p-0 text-muted">Ubicación</a></li>
          <li className="nav-item"><a href="#contacto" className="nav-link p-0 text-muted">Contacto</a></li>
        </ul>
      </div>
      <div className="col">
        <h5>Direccion</h5>
        <p className="text-muted">Av.SiempreViva 1245</p>
        <p className="text-muted">San Martin de los Andes,Patagonia Argentina</p>
        
      </div>
      <div className="col">
        <h5>Contacto</h5>
        <ul className="nav flex-column">
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex iconos-redes-sociales">
          <li className="ms-3"><a className="" href="https://instagram.com/campingquemquem?igshid=OGQ2MjdiOTE="><i class="bi bi-instagram"></i><svg className="bi bi-instagram" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="https://m.facebook.com/campingquemquem/photos/a.1009718072728462/1010691542631115/?type=3&source=48&__tn__=EH-R"><i class="bi bi-facebook"></i><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          <li className="ms-3"><a className="" href="mailto:yoriokael@gmail.com"><i class="bi bi-envelope"></i><svg className="bi bi-instagram" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
      </ul>
        </ul>
      </div>
    </footer>
  </div>
  
    
  )
}

export default Footer;
