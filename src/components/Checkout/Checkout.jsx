import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"

export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        //Validacion de emails
        const msgError = validateForm(datForm)
        if(msgError!==""){
            toast.error(msgError)
        } else {
            // submit form
            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProduct(prodCarrito.id).then(prodBDD => {
                    prodBDD.Stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                    updateProduct(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
                toast.success(`ID: ${ordenCompra.id} Your order for ${new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(totalPrice())} was successfully placed Thank you for shopping with us!`,)
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }
    }

    const validateForm=(objform)=>{
        let msgErr="";
        const formfields = Object.fromEntries(objform);

        if(formfields.nombre==='') {msgErr="Name is missing"}
        else if(formfields.email==='') {msgErr="Email is missing"}
        else if(formfields.repEmail==='') {msgErr="Confirm email is missing"}
        else if(formfields.celular==='') {msgErr="Phone is missing"}
        else if(formfields.direccion==='') {msgErr="Adress is missing"}
        else if(formfields.email!==formfields.repEmail) {msgErr="Emails do not match"}

        return msgErr;
    }

   return (
    <>
        {
            carrito.length === 0 
            ? 
            <div className="container" style={{marginTop:"50px", marginBottom: "20px", width:"500px", border:"1px solid", borderRadius: "5px", textAlign:"center"}}>
                <h3>You don't have any products in your cart</h3>
                <br/>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continue shopping</button></Link>
                <br/>
            </div>
            :
            <div className="container" style={{marginTop:"20px", marginBottom: "20px", width:"500px", border:"1px solid", borderRadius: "5px"}}>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Full name</label>
                        <input type="text" className="form-control" name="nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repEmail" className="form-label">Confirm Email</label>
                        <input type="email" className="form-control" name="repEmail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Phone number</label>
                        <input type="number" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Adress</label>
                        <input type="text" className="form-control" name="direccion" />
                    </div>
                    <div className="mb-3 rightAlign" >
                        <button type="submit" className="btn btn-primary">Complete purchase</button>
                    </div>
                </form>
            </div>
        } 
    </>     
   )
}