import cart_icon from './cart-32.ico';

const CartWidget = () => {
    return (
        <>
            <button className="btn btn-dark">
                <img src={cart_icon} alt="Shopping cart" />
                &nbsp;3 items
            </button>
        </>
    );
}

export default CartWidget;
