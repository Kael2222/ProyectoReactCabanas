import 'bootstrap-icons/font/bootstrap-icons.css';
import "../servicios/Servicios.css"
import { iconos } from '../../mockData/Data';

const Servicios = () => {

  

  return (
    <>
        <h1 className="text-center titulo" id="servicios">Servicios</h1>
          <div className="container contenedor-servicios">
            <div className='row'>
              {iconos.map((icono) => {
                  return(
                        <div key={icono.id} className='col-md-6 col-lg-3 d-flex flex-column align-items-center'>
                          <i className={`${icono.btName} iconos-servicios`}></i>
                          <p>{icono.name}</p>
                        </div> 
                  )    
                })
              }
            </div>  
        </div> 
    </>
  )
}




export default Servicios;


/*



 <div>
              <i className="bi bi-wifi iconos-servicios"></i>
                <p>Internet wifi</p>
              </div>
              <div>
              <i className="bi bi-wifi iconos-servicios"></i>
                <p>Internet wifi</p>
              </div>
              <div>
              <i className="bi bi-wifi iconos-servicios"></i>
                <p>Internet wifi</p>
              </div>




              <div className='row'>
        <div className="container contenedor-servicios">
            <div>
            <i className="bi bi-wifi iconos-servicios"></i>
            <p>Internet wifi</p>
            </div>
            <div>
            <i className="bi bi-wifi iconos-servicios"></i>
            <p>Internet wifi</p>
            </div>
            <div>
            <i className="bi bi-wifi iconos-servicios"></i>
            <p>Internet wifi</p>
            </div>
            <div>
            <i className="bi bi-wifi iconos-servicios"></i>
             <p>Internet wifi</p>
            </div>

        </div>
        
        </div>

*/