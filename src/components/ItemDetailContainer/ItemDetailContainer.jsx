import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { getProduct } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
        .then(item => {
            setProduct(item)
        })
    }, [id])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={product}/>
        </div>
    )
}
