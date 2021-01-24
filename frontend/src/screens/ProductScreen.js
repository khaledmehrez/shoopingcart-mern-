import React, { useEffect } from 'react'

import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { detailProducts } from "../actions/productActions"
export default function ProductScreen(props) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { products, loading, error } = productDetails
    const productID = props.match.params.id
    console.log(detailProducts)
  

    useEffect(() => {
        dispatch(detailProducts(productID))

    }, [dispatch, productID])

    if (loading === true) {
        return <LoadingBox />
    }
    else if (error !== undefined) {
        return <MessageBox>{`${error}`}</MessageBox>
    }
    else {
        return (
            <div>
                <Link to="/">Back to HomeScreen</Link>
                <div className="row">
                    <div className="col-2">
                        <img className="large" src={products.image} alt={products.name} />


                    </div>
                    <div className="col-1">

                        <ul>
                            <li>
                                <h1>{products.name}</h1>
                            </li>
                            <li>
                                <Rating rating={products.rating} numReviews={products.numReviews} />
                            </li>
                            <li>
                                price=${products.price}
                            </li>
                            <li>
                                description:{products.description}
                            </li>
                        </ul>
                    </div>

                    <div className="col-1">

                        <div className="card card-body">

                            <ul>
                                <li>
                                    <div className="row">
                                        <div>price</div>
                                        <div className="price">{products.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        {products.countInStock > 0 ? (<span className="success">In stock</span>) : (<span className="error">Unavailaible</span>)}

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
