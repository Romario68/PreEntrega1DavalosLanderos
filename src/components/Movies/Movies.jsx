import {ItemListContainer} from '../ItemListContainer/ItemListContainer.jsx'
import { useParams } from 'react-router-dom'

export const Movies = () => {
    const {categoryName} = useParams()

    return (
        <div className="row cardProductos">
            {<ItemListContainer categoryName={categoryName}/>}
        </div>
    );
}
