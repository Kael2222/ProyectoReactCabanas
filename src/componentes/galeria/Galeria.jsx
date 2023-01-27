import { useState } from "react"
import "../galeria/Galeria.css"
import Cabana1 from "../imagenes/cabana-1.jpg"
import Cabana2 from "../imagenes/cabana-2.jpg"
import Cabana3 from "../imagenes/cabana-3.jpg"
import Cabana4 from "../imagenes/cabana-4.jpg"
import Cabana5 from "../imagenes/cabana-5.jpg"
import Cabana6 from "../imagenes/cabana-6.jpg"
import Cabana7 from "../imagenes/cabana-7.jpg"
import Cabana8 from "../imagenes/cabana-8.jpg"
import ImgModal from "../img-modal/ImgModal"


const Galeria = () => {

    const imagenes = [    
        {
            id:0,              
            img:Cabana1,
        },
        {
            id:1,
            img:Cabana2,
        },
        {
            id:2,
            img:Cabana3,
        },
        {
            id:3,
            img:Cabana4,
        },
        {
            id:4,
            img:Cabana5,
        },
        {
            id:5,
            img:Cabana6,
        },
        {
            id:6,
            img:Cabana7,
        },
        {
            id:7,
            img:Cabana8,

        },

    ];

  
    //NUEVO BLOQUE ---->  (IMAGE MODAL)
    
    
    
    const [clickedImg, setClickedImg] = useState({
        item:null,
        index:null
    });

    const handleClick = (data) =>{
        setClickedImg({item:data.img, index:data.id})
        /*
        setClickedImg(data.img)
        setIndex(data.id)*/
    }   


    /*
    const prevSlide = () => {
        if(clickedImg.index === 0){
        
            const largoDeArray = imagenes.length-1;
            setClickedImg({item:imagenes[largoDeArray].img, index:imagenes.length-1})
        }
        else{  //CASO CONTRARIO
            setClickedImg({item:imagenes[clickedImg.index-1].img, index:clickedImg.index-1})
        }
    
    }


    const nextSlide = () => {

        const largoDeArray = imagenes.length-1
        if(clickedImg.index === largoDeArray) { //ESTOY EN LA ULTIMA IMAGEN!!!!!! 
            setClickedImg({item:imagenes[0].img, index:0})    
        }
        else{
            // clickedImg => TIENE MI IMAGEN ACTUAL, QUE TIENE DOS ATRIBUTOS: LA IMAGEN, Y UN INDEX
            // clickedImg.index = 5 
            imagenes[6].img
            setClickedImg({item: imagenes[clickedImg.index + 1].img, index:clickedImg.index+1})
        }

    }*/



    const prevSlide = ()  => setClickedImg(clickedImg.index === 0 ? {item:imagenes[imagenes.length-1].img, index:imagenes.length-1} : {item:imagenes[clickedImg.index-1].img, index:clickedImg.index-1});

    const nextSlide = () => setClickedImg(clickedImg.index === imagenes.length-1 ? {item:imagenes[0].img, index:0}: {item:imagenes[clickedImg.index+1].img, index:clickedImg.index+1});
    
    /************************************* */

return(

    <div className="container contenedor-galeria">
        <div className="row ">
            {imagenes.map((imagen) => {  
                return(
                <div key={imagen.id} className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
                <img className="img-galeria" src={imagen.img}  alt="imagen de una cabana" onClick={() => handleClick(imagen)} />
            </div>
            );
            })}

        </div>
        {clickedImg.item && (clickedImg.index || clickedImg.index === 0) && <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} nextSlide={nextSlide} prevSlide={prevSlide}/>}
    </div>
 ) ;
};

export default Galeria;


/*




*/