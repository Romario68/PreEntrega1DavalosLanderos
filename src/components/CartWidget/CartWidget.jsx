import cart_icon from './cart-32.ico';
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-dark">
                    <img src={cart_icon} alt="Shopping cart" />
                    {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()} items</span>}
                </button>   
            </Link>
        </>
    );
}
