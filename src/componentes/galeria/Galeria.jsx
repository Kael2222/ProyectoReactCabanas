import { useState, useEffect } from "react"
import "../galeria/Galeria.css"
import ImgModal from "../img-modal/ImgModal"
import { imagenes } from "../../mockData/Data";


const Galeria = ({ setIsModalOpen }) => {


    const [clickedImg, setClickedImg] = useState({
        item: null,
        index: null
    });

    useEffect(() => {

        setIsModalOpen(!!(clickedImg.item && (clickedImg.index || clickedImg.index === 0)))
    }, [clickedImg])

    //NUEVO BLOQUE ---->  (IMAGE MODAL)




    const handleClick = (data) => {
        setClickedImg({ item: data.img, index: data.id })
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



    const prevSlide = () => setClickedImg(clickedImg.index === 0 ? { item: imagenes[imagenes.length - 1].img, index: imagenes.length - 1 } : { item: imagenes[clickedImg.index - 1].img, index: clickedImg.index - 1 });

    const nextSlide = () => setClickedImg(clickedImg.index === imagenes.length - 1 ? { item: imagenes[0].img, index: 0 } : { item: imagenes[clickedImg.index + 1].img, index: clickedImg.index + 1 });

    /************************************* */

    return (

        <div className="container contenedor-galeria">
            <div className="row ">
                {imagenes.map((imagen) => {
                    return (
                        <div key={imagen.id} className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center">
                            <img className="img-galeria" src={imagen.img} alt="imagen de una cabana" onClick={() => handleClick(imagen)} />
                        </div>
                    );
                })}

            </div>
            {clickedImg.item && (clickedImg.index || clickedImg.index === 0) && <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} nextSlide={nextSlide} prevSlide={prevSlide} />}
        </div>
    );
};

export default Galeria;


/*




*/