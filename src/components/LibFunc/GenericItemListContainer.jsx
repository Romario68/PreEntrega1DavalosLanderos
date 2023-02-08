import ItemList from '../ItemList/ItemList'
import { useState } from 'react'

const GenericItemListContainer = (categoryName)=>{
    const [productos, setProductos] = useState([])
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
            setProductos(ItemList({products}))
        }
        )
        .catch(function(error) {
            console.log(error.message)
        }
        )
    }
    else{
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(products => {
            setProductos(ItemList({products}))
        }
        )
        .catch(function(error) {
            console.log(error.message)
        }
        )
    }
    return (
        <>{productos}</>
        );
}

export {GenericItemListContainer};
