import "../galeria/Galeria.css"
import Cabana1 from "../imagenes/cabana-1.jpg"
import Cabana2 from "../imagenes/cabana-2.jpg"
import Cabana3 from "../imagenes/cabana-3.jpg"
import Cabana4 from "../imagenes/cabana-4.jpg"
import Cabana5 from "../imagenes/cabana-5.jpg"
import Cabana6 from "../imagenes/cabana-6.jpg"
import Cabana7 from "../imagenes/cabana-7.jpg"
import Cabana8 from "../imagenes/cabana-8.jpg"


const Galeria = () => {

    const imagenes = [    
        {
            id:1,
            img:Cabana1,
        },
        {
            id:2,
            img:Cabana2,
        },
        {
            id:3,
            img:Cabana3,
        },
        {
            id:4,
            img:Cabana4,
        },
        {
            id:5,
            img:Cabana5,
        },
        {
            id:6,
            img:Cabana6,
        },
        {
            id:7,
            img:Cabana7,
        },
        {
            id:8,
            img:Cabana8,

        },

    ];


return(
    
    <div className="container contenedor-galeria">
        <div className="row ">
            {imagenes.map((imagen) => {
                return(
                <div key={imagen.id} className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
                <img className="img-galeria" src={imagen.img}  alt="imagen de una cabana" />
            </div>
            );
            })}

        </div>
    </div>
 ) ;
};

export default Galeria;
