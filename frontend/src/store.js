import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import Thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';

import { productDetailsReducer, productListReducer } from './reducers/productReducer';

const initialState = {
    cart:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
    }
};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const store =  createStore(reducer, initialState,composeEnhancer(applyMiddleware(Thunk)))

export default store