import { useCarritoContext } from "../../context/CarritoContext"
export const ItemCart = ({item}) => {
    const {carrito, removeItem} = useCarritoContext()

    return(
        <div className="card mb-3 cardCart">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.Image} alt={`Imagen de producto ${item.Title}`} className="img-fluid rounded-start imgProd" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">Qty: {item.cant}</p>
                    <p className="card-text">Unit price: $ {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(item.Price)}</p>
                    <p className="card-text">Subtotal: $ {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(item.Price * item.cant)}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remove from cart</button>
                </div>
            </div>
        </div>
    </div>
    )
}
