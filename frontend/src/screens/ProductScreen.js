import React, { useEffect,useState } from 'react'

import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { detailProducts } from "../actions/productActions"
export default function ProductScreen(props) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails
    const productID = props.match.params.id
const [qty, setQty] = useState(1)
const [disableAdd, setDisableAdd] = useState(false)
const [disableRemove, setDisableRemove] = useState(false)

    useEffect(() => {
        dispatch(detailProducts(productID))

    }, [dispatch, productID])

    const Addqty=()=>{
        if(qty<product.countInStock){
            setDisableRemove(false)
     setQty(qty+1)
        }
        else{
            setDisableAdd(true)
            
        }
    }
    const Removeqyt=()=>{
        if(qty>1){
            setDisableAdd(false)
        setQty(qty-1)
        }
        else{
            setDisableRemove(true)
         
        }
    }
    const handleChange=(e)=>{
        const n=Number(e.target.value)
        
        if(n<=product.countInStock ){
            setDisableAdd(false)
            setDisableRemove(false)
    setQty(n)
        }
        
    }
    const addToCartHandler = () => props.history.push(`/cart/${productID}?qty=${qty}`)
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
                        <img className="large" src={product.image} alt={product.name} />


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
                                        {product.countInStock > 0 ? (<span className="success">In stock</span>) : (<span className="error">Unavailaible</span>)}

                                    </div>
                                </li>
                                {
                                    product.countInStock>0 &&
                                    (<>
                                    <button type="button" disabled={disableRemove} onClick={Removeqyt} >--</button>
                                    
                                    <input value={qty} onChange={(e)=>handleChange(e)}  />
                                    
                                    <button type='button' disabled={disableAdd} onClick={Addqty}>+</button>
                                        <li>
                                        <button className="primary block"  onClick = {addToCartHandler}>Add to cart</button>
                                    </li>
                                    </>
                                    )
                                }
                               

                            </ul>
                        </div>
                    </div>



                </div>

            </div>
        )
    }

}
