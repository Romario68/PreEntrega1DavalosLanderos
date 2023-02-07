import { GenericItemListContainer } from '../LibFunc/GenericItemListContainer.jsx'

const Music = () => {
    return (
        <div className="row cardProductos">
            {GenericItemListContainer("music")}
        </div>
    );
}

export default Music;
