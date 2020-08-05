import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { fetchProducts } from './actions/products'
import configureStore from './store/configureStore'
import AppRouter from "./routers/AppRouter"

import 'normalize.css/normalize.css'
import './styles/main.less'

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))

store.dispatch(fetchProducts()).then((products) => {

})
