import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryName} = useParams()
    
    useEffect(() => {
        const Opciones = new Map();
        Opciones.set('fiction',1);
        Opciones.set('nofiction',2);
        Opciones.set('science',3);
        Opciones.set('engineering',4);
        Opciones.set('kids',5);
        Opciones.set('music',6);
        Opciones.set('movies',7);
        
        let idCategoria = Opciones.get(categoryName);

        if(categoryName){
            fetch("../json/productos.json")
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList({products})
                setProductos(productsList)
            })
        }
        else{
            fetch("../json/productos.json")
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                setProductos(productsList)
            })
        }
    }, [categoryName])
    return (
        <div className="row cardProductos">
            {productos}
        </div>
    );
}

export default ItemListContainer;
