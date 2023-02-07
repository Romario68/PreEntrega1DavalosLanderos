import { GenericItemListContainer } from '../LibFunc/GenericItemListContainer.jsx'

const Movies = () => {
    return (
        <div className="row cardProductos">
            {GenericItemListContainer("movies")}
        </div>
    );
}

export default Movies;
