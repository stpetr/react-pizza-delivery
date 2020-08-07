import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from '../reducers/products'
import cartReducer from '../reducers/cart'
import currencyReducer from "../reducers/currency";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(combineReducers({
        products: productsReducer,
        cart: cartReducer,
        currency: currencyReducer,
    }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}
