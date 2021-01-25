import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function CartScreen(props) {
    const dispatch = useDispatch()
    const productID = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]): 1;
    const  cart= useSelector(state => state.cart)
    console.log(cart)

useEffect(function () {

        if (productID) {


            dispatch((addToCart(productID, qty)));
        }

    }, [dispatch,productID,qty ])

    return (
        <div>
            <h1>Cart screen</h1>
            <p>Add to cart : ProductID: {productID} Qty: {qty}</p>

        </div>
    )
}

export default CartScreen