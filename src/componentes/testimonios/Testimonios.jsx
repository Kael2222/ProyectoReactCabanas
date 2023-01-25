import { useState } from "react"
import "../testimonios/Testimonios.css"
/*import { comentarios } from "../../mockComentarios/Comentarios";*/




const Testimonios = () => {


  const [comment, setComment] = useState(0);

    
    const commentsData = [{   
      id: 0,
      name: 'Kaleitor',
      job: '',
      image:'',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa non hic rerum cumque sunt illum adipisci itaque recusandae vel autem beatae ea excepturi, laborum sint quos, molestias deserunt voluptatum magni! Recusandae dolor libero animi accusantium dolorem voluptate deleniti iste!",
    },
    {
      id: 1,
      name: 'José',
      job: '',
      image:'',
      text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati, labore doloremque dolores alias doloribus.",
    },
    {
      id: 2,
      name: 'Robert',
      job: '',
      image:'',
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, cumque molestias. Fuga error voluptatem officiis repudiandae quae facilis similique voluptatibus maxime officia tempore, id nemo nulla omnis dicta. Atque, voluptatem.",
    },
  ]
  
  const checkNum = (number) => {
    if (number > commentsData.length -1) {   
      return 0
    } 
    if (number < 0) {  
      return commentsData.length - 1   
    }
    return number
  }

  const prevComment = () => {
    setComment(comment => {
      let newComment = comment - 1;
      return checkNum(newComment);   
    })
  }

  const nextComment = () => {
    setComment( comment => {
      let newComment = comment + 1;
      return checkNum(newComment);
    })
  }



  return (
    
    <div className="testimonios" id="testimonios">
        
        <h2 className="text-center titulo">Testimonios</h2>
        <h3 className="text-center">Estos son algunos comentarios de quienes pasaron por nuestras Cabañas ...</h3>

        <div id="testimonios-carrusel" class="carousel carousel-dark slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
        
      <div className="container">
      <i className="bi bi-person-circle testimonio-icono"></i> 
            <p className="testimonio-texto">{commentsData[comment].text}</p>
            <p><b>{commentsData[comment].name}</b></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev" onClick={prevComment}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next" onClick={nextComment}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
    </div>
  )
}

        
        


export default Testimonios;




/*

return (
    
    <div className="testimonios" id="testimonios">
        
        <h2 className="text-center titulo">Testimonios</h2>
        <h3 className="text-center">Estos son algunos comentarios de quienes pasaron por nuestras Cabañas ...</h3>

        <div id="testimonios-carrusel" class="carousel carousel-dark slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
        
      <div className="container">
      <i className="bi bi-person-circle testimonio-icono"></i>
            <p className="testimonio-texto">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolores cum voluptate sapiente totam ipsam. Voluptatibus unde odio recusandae. Hic adipisci consectetur alias, illum ad nesciunt repellendus dignissimos iure delectus."</p>
            <p><b>J.S</b></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
        <img className=" bi bi-person-circle testimonio-icono "  src="" alt="" />
            <p className="testimonio-texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolores cum voluptate sapiente totam ipsam. Voluptatibus unde odio recusandae. Hic adipisci consectetur alias, illum ad nesciunt repellendus dignissimos iure delectus.</p>
            <p><b>K.Y</b></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
        <img className=" bi bi-person-circle testimonio-icono "  src="" alt="" />
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



*/