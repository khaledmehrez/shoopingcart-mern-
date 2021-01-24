import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import Thunk from 'redux-thunk'
import data from './data'
import { productDetailsReducer, productListReducer } from './reducers/productReducer';

const initialState = {};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const store =  createStore(reducer, initialState,composeEnhancer(applyMiddleware(Thunk)))

export default store