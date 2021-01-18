import React, { useEffect, useState } from 'react'
import Product from '../components/Products';
import axios from 'axios'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('/api/products')
            .then(function (res) {
                // handle success
                setLoader(false)
                setProducts(res.data)
            })
            .catch(function (err) {
                // handle error
               setError(err)
               setLoader(false)
               console.log(err)
               
            })
            
    }, [])
    console.log(   )
    
    if (loader === true) {
        return <LoadingBox />
    }
    else if (error !==false) {
        return <MessageBox>{`${error}`}</MessageBox>
    }
    {
        return (
            <div>
                <div className="row center">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </div>
        )
    }


}

