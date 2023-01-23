import ItemCard from './ItemCard/ItemCard.jsx';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

return (
    <div className="container-fluid">
        <div>
            <p className="greetingText">{greeting}</p>
        </div>
        <ItemCard Header={"La republica"} Text={"Esto es una prueba del texto que deberia llevar la ficha..."}/>
    </div>
);
}

export default ItemListContainer;
