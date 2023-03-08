import {ItemCounter} from '../ItemCounter/ItemCounter';
import { useCarritoContext } from '../../context/CarritoContext'
import { Link } from "react-router-dom"

export const ItemDetail = ({item}) => {
  const {addItem} = useCarritoContext()

  const onAdd = (Qty) => {
    addItem(item,Qty)
  }

  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={`${item.Image}`} className="img-fluid rounded-start" style={{marginTop:"20px"}} alt={`${item.Title}`} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className='card-title'>{item.TitleL}</h5>
                <p className='card-text'>Publisher: {item.Publisher}</p>
                <p className='card-text'>Date: {item.Date}</p>
                <p className='card-text'>Review: {item.Review}</p>
                <p className='card-text'>Price: {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(item.Price)}</p>
                <p className='card-text'>Stock: {item.Stock}</p>
                <ItemCounter valMin={1} valStock={item.Stock} onAdd={onAdd}/>
                &nbsp;<button className="btn btn-dark"><Link className="nav-link" to={'/checkout'}>Buy</Link></button>
            </div>
        </div>
    </div>
  )
}
