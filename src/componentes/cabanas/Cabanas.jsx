import React from 'react'
import "../cabanas/Cabanas.css"
import '../../App.css';

const Cabana = () => {
  return (
    <div className="container text-center mt-5 " id='cabanas'>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img className='img1 img-thumbnail'  src="https://res.cloudinary.com/dse7avpgs/image/upload/v1674911655/cabana1_hj6uxo.jpg" alt="Imagen de una cabaña"/>
        </div>
      
        <div className="col-12 col-lg-6">
            <h2 className="cabana-titulo">Nuestras Cabañas</h2>
                <p className='cabana-texto m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam omnis dolor aliquid unde iure necessitatibus inventore, soluta officiis accusantium assumenda tenetur magni quo error ut iusto facere blanditiis, saepe quasi.
                Distinctio adipisci ullam at doloremque illum rem sit quis tenetur, praesentium architecto, in minus accusantium nostrum? Ex fugit repellendus impedit dignissimos asperiores et? Ea aut consequatur itaque vitae, iste eum.
                Incidunt debitis soluta, tempora rem laboriosam repellendus illo quaerat odit totam, possimus unde libero ipsum minima, quas qui eum. Ipsa vel at accusamus maiores delectus aliquid nesciunt quam labore corporis.
                Cumque animi error quam cupiditate incidunt tenetur voluptates, quaerat recusandae alias facere saepe voluptatum iure eligendi ipsam rerum numquam mollitia porro enim magni perspiciatis nihil dolorum nobis. Ipsum, itaque voluptas.
                </p>
        </div>
      </div>
    </div>
  )
}

export default Cabana;
      
        
      