const ItemCard = ({Header, Text}) => {

    return (
        <div className="card border-primary mb-3" style={{width: "20rem"}}>
        <div className="card-header">{Header}</div>
        <div className="card-body">
            <p className="card-text">{Text}</p>
        </div>
    </div>
    );
    }
    
    export default ItemCard;
    