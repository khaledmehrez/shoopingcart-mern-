import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constantes/productConstantes"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        console.log(error)

        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}
export const detailProducts = (productID) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST

    });
    try {
        const { data } = await axios.get(`/api/products${productID}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    }
    catch (error) {

console.log(error.response)
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response : error.message, });
    }
}