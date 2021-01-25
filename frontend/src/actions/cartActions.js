import axios from "axios"
import { CART_ADD_ITEM } from "../constantes/cartConstantes";

export const addToCart = (productID, qty) => async (dispatch,getState) => {
    const { data} = await axios.get(`/api/products/${productID}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,

        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
