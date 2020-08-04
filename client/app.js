import React from 'react'
import ReactDOM from 'react-dom'

import './styles/main.less'

const jsx = (
    <div>
        <h1>Buy Pizza Pie</h1>
        <p>Pepperoni and green peppers, mushrooms, olive, chives</p>
    </div>
)

ReactDOM.render(jsx, document.querySelector('#app'))
