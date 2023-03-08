import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCounter = ({valMin, valStock, onAdd}) => {
    const [ItemCounter, setCounter] = useState(valMin)
    const addItem = () => (ItemCounter < valStock) && setCounter(ItemCounter + 1)
    const subItem = () => (ItemCounter > valMin) && setCounter(ItemCounter - 1)
    const addToCart = () => {
        onAdd(ItemCounter)
        toast(`${ItemCounter} item(s) added to cart!`);
    };

    return (
    <>
        <button className="btn btn-dark" onClick={() => subItem()}>-</button>
        &nbsp;{ItemCounter}&nbsp;
        <button className="btn btn-dark" onClick={() => addItem()}>+</button>
        &nbsp;<button className="btn btn-dark" onClick={() => addToCart()}>Add to cart</button>
    </>
    )
}