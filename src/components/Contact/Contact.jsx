import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contact = () => {
    const contactData = React.useRef() 
    let navigate = useNavigate() 
    const consultForm = (e) => {
        e.preventDefault()
        //Se activaran cuando se tenga la parte de grabar a la DB
        //const dataForm = new FormData(contactData.current) 
        //const contact = Object.fromEntries(dataForm) 
        e.target.reset() 
        toast.success("Gracias!, Su comentario ha sido recibido exitosamente");
        navigate("/")
    }
  return (
    <div className="container" style={{marginTop:"20px", marginBottom: "20px", width:"500px", border:"1px solid", borderRadius: "5px"}}>
        <form onSubmit={consultForm} ref={contactData}>
        <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">First name</label>
            <input type="text" className="form-control" name="FirstName"/>
        </div>
        <div className="mb-3">
            <label htmlFor="LastName" className="form-label">Last name</label>
            <input type="text" className="form-control" name="LastName"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Cellphone number</label>
            <input type="number" className="form-control" name="phone" />
        </div>
        <div className="mb-3">
            <label htmlFor="comment" className="form-label">Comment</label>
            <textarea className="form-control" name="comment" rows={3} defaultValue={""} />
        </div>
        <div className="mb-3 rightAlign" >
            <button type="submit" className="btn btn-dark">Send</button>
        </div>
        </form>
    </div>
  )
}