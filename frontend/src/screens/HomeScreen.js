import React, { useEffect, useState } from 'react'
import Product from '../components/Products';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from "../actions/productActions"
export default function HomeScreen() {
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])


    if (loading === true) {
        return <LoadingBox />
    }
    else if (error !== undefined) {
        return <MessageBox>{`${error}`}</MessageBox>
    }
    else{
        return (
            <div>
                <div className="row center">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </div>
        )
    }


}

