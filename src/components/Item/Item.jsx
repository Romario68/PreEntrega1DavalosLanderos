import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
      <div className="card mb-3 cardProducto border-light">
          <div className="imgbox">
            <img src={`../img/${item.Image}`} className="card-img-top imgProd" alt={`Imagen de ${item.Title}`} />
          </div>
          <div className="card-body cardBody">
            <p className="card-title">{item.Title}</p>
            <p className="card-text">{item.Publisher}</p>
            <p className="card-text">$ {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(item.Price)}</p>
          </div>
          <div className="bottonBox">
              <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>View product</Link></button>
          </div>
      </div>
    )
  }

  export default Item;