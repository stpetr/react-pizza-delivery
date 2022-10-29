import React from 'react'
import { useHistory } from 'react-router-dom'
import ProductList from "./ProductList"
import CartWidget from "./CartWidget"

export const HomePage = () => {
  const history = useHistory()

  return (
    <div className="page page__home">
      <h1 className="page__heading">Welcome to our Pizza restaurant!</h1>
      <h2 className="page__home__menu-heading">Here's what we've got for you:</h2>
      <div className="with-sidebar">
        <ProductList/>
        <div className="sidebar">
          <CartWidget navigateToOrderPage={() => history.push('/order')}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
