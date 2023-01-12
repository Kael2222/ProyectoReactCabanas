import React, { useState } from 'react'
import "../form/Form.css"
import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [telefono, setTelefono] = useState("");

    const FormSubmit = () => {
        alert("El formulario se envio con exito")
    }

  return (
    <>
    <h2 className="text-center"><b>Contacto</b></h2>
    <div className="container container-form">
        <form className="row g-3 mt-3 justify-content-center align-items-center" onSubmit={handleSubmit(FormSubmit)}>
        
        <div className="col-6">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input 
            {...register("nombre", { required: true })}
            type="text" 
            className="form-control"
            id="nombre" 
            name="nombre"  
            placeholder="Ingrese su Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
            <p className="text-danger">{errors.nombre?.type === 'required' && "Este campo es obligatorio"}</p>

        </div>
        <div className="col-6">
            <label htmlFor="apellido" className="form-label">Apellido:</label>
            <input 
             {...register("apellido", { required: true })}
            type="text" 
            className="form-control"
            id="apellido" 
            name="apellido"  
            placeholder="Ingrese su Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)} />
            <p className="text-danger">{errors.nombre?.type === 'required' && "Este campo es obligatorio"}</p>
        </div>
        <div className="col-6">
            <label htmlFor="email" className="form-label">E-mail:</label>
            <input 
             {...register("email", { required: true, pattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
            type="email" 
            className="form-control"
            id="email" 
            name="email"  
            placeholder="Ingrese su E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  />
              <p className="text-danger">
                {errors.email?.type === 'required' && "Este campo es obligatorio"}
                {errors.email?.type === 'pattern' && "El formato del correo no es correcto"}
            </p>
        </div>
        <div className="col-6">
            <label htmlFor="telefono" className="form-label">Teléfono :</label>
            <input 
            {...register("telefono", { required: true, maxLength:10, pattern:/^([0-9]*)$/  })}
            type="text" 
            className="form-control"
            id="telefono" 
            name="telefono"  
            placeholder="Ingrese su teléfono "
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)} />
            <p className="text-danger">
                {errors.telefono?.type === 'required' && "Este campo es obligatorio"}
                {errors.telefono?.type === 'pattern' && "Solo se permiten numeros en este campo"}
            </p>
        </div>
        <div className="col-6 text-center mt-3">
            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
            <textarea 
             {...register("mensaje", { required: true })}
            type="textarea" 
            className="form-control"
            id="mensaje" 
            name="mensaje"  
            placeholder="Ingrese su mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)} />
            <p className="text-danger">{errors.mensaje?.type === 'required' && "Este campo es obligatorio"}</p>
        </div>
        <div className="col-12 text-center">
            <button 
            type="submit"
            className="btn btn-dark">Enviar</button>
        </div>
        </form>
    </div>

    </>
  )
};


export default Form;

