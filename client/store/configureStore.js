import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from '../reducers/products'
import cartReducer from '../reducers/cart'
import currencyReducer from '../reducers/currency'
import orderReducer from '../reducers/order'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  return createStore(combineReducers({
      products: productsReducer,
      cart: cartReducer,
      currency: currencyReducer,
      order: orderReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )
}
