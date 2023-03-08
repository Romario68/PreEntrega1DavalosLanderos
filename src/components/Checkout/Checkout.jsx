import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"
import { useState } from "react"

export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        //Validacion de emails
        if (cliente.email !== cliente.repEmail) {
            toast.error("Emails do not match")
        } else {
            // submit form
            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProduct(prodCarrito.id).then(prodBDD => {
                    prodBDD.stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                    updateProduct(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
                toast.success(`Thank you very much for shopping with us! Your purchase order with ID: ${ordenCompra.id
                } for a total of $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} was successfully placed`)
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }
    }

   return (
    <>
        {carrito.length === 0 
         ? 
          <>
                <h2>You don't have any products in your cart</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continue shopping</button></Link> 
          </>
          :
            <div className="container" style={{marginTop:"20px"}}>
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
            <button type="submit" className="btn btn-primary">Complete purchase</button>
            </form>
        </div>
        } 
    </>     
   )
}