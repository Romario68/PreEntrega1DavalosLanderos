import {ItemCounter} from '../ItemCounter/ItemCounter';

const ItemDetail = ({item}) => {
  return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={`../img/${item.Image}`} className="img-fluid rounded-start marginSup" alt={`${item.Title}`} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className='card-title'>{item.TitleL}</h5>
                <p className='card-text'>Publisher: {item.Publisher}</p>
                <p className='card-text'>Date: {item.Date}</p>
                <p className='card-text'>Review: {item.Review}</p>
                <p className='card-text'>Price: {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(item.Price)}</p>
                <p className='card-text'>Stock: {item.Stock}</p>
                <ItemCounter valMin={1} valStock={item.Stock}/>
                &nbsp;<button className='btn btn-secondary'>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;