import "../testimonios/Testimonios.css"
/*import { comentarios } from "../../mockComentarios/Comentarios";*/




const Testimonios = () => {

  return (
    
    < div className="testimonios" id="testimonios">
        
        <h2 className="text-center titulo">Testimonios</h2>
        <h3 className="text-center">Estos son algunos comentarios de quienes pasaron por nuestras Cabañas ...</h3>

        <div id="testimonios-carrusel" class="carousel carousel-dark slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
        
      <div className="container">
        <img className="testimonio-imagen rounded-circle"  src="" alt="" />
            <p className="testimonio-texto">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolores cum voluptate sapiente totam ipsam. Voluptatibus unde odio recusandae. Hic adipisci consectetur alias, illum ad nesciunt repellendus dignissimos iure delectus."</p>
            <p><b>J.S</b></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
        <img className="testimonio-imagen rounded-circle"  src="" alt="" />
            <p className="testimonio-texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolores cum voluptate sapiente totam ipsam. Voluptatibus unde odio recusandae. Hic adipisci consectetur alias, illum ad nesciunt repellendus dignissimos iure delectus.</p>
            <p><b>K.Y</b></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
        <img className="testimonio-imagen rounded-circle"  src="" alt="" />
            <p className="testimonio-texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolores cum voluptate sapiente totam ipsam. Voluptatibus unde odio recusandae. Hic adipisci consectetur alias, illum ad nesciunt repellendus dignissimos iure delectus.</p>
            <p><b>R.M</b></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
    </div>
  )
}

        
        


export default Testimonios;