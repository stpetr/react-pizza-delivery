import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { fetchProducts } from './actions/products'
import { cartInit } from "./actions/cart"
import AppRouter from "./routers/AppRouter"

import 'normalize.css/normalize.css'
import './styles/main.less'

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))

store.dispatch(fetchProducts()).then((products) => {
  store.dispatch(cartInit(products))
})
