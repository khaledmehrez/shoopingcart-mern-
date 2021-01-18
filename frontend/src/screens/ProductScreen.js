import React from 'react'
import NotfoundScreen from './NotfoundScreen'
//data
import data from "../data"
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

export default function ProductScreen(props) {
    const product = data.products.find(el => el._id === props.match.params.id)
    if (product === undefined) {

        return (
            <div>
                
                <Link to="/">Back to HomeScreen</Link>
                <NotfoundScreen />
            </div>
        )
    }
    else {
        return (
            <div>
                 <Link to="/">Back to HomeScreen</Link>
                <div className="row">
                    <div className="col-2">
<img className="large" src={product.image} alt={product.name}/>


                    </div>
                    <div className="col-1">

                       <ul>
                           <li>
                               <h1>{product.name}</h1>
                           </li>
                           <li>
                               <Rating rating={product.rating} numReviews={product.numReviews} />
                           </li>
                           <li>
                               price=${product.price}
                           </li>
                           <li>
                               description:{product.description}
                           </li>
                       </ul>
             </div>

                    <div className="col-1">

                        <div className="card card-body">

                            <ul>
                                <li>
                                    <div className="row">
                                        <div>price</div> 
                                        <div className="price">{product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div> 
                                        {product.countInStock>0?(<span className="success">In stock</span>):(<span className="error">Unavailaible</span>)}
                                        
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Add to cart</button>
                                </li>

                            </ul>
                        </div>
             </div>



                </div>

            </div>
        )
    }
}
