import { useState } from "react"

export const ItemCounter = ({valMin, valStock}) => {
    const [ItemCounter, setCounter] = useState(valMin)
    const addItem = () => (ItemCounter < valStock) && setCounter(ItemCounter + 1)
    const subItem = () => (ItemCounter > valMin) && setCounter(ItemCounter - 1)

    return (
    <>
        <button className="btn btn-dark" onClick={() => addItem()}>+</button>
        &nbsp;{ItemCounter}&nbsp;
        <button className="btn btn-dark" onClick={() => subItem()}>-</button>
    </>
    )
}