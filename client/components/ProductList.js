import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

export const ProductList = () => {
  const { loading, items: products, error } = useSelector(({ products }) => products)

  if (error) {
    return (
      <div className="product-list__failure">
        <p><strong>An error occurred while loading products. Please try again later ;-(</strong></p>
        <p>{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="product-list__loading">
        <img src="images/loader.gif" alt="Loading..."/>
      </div>
    )
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li className="product-list__item" key={product._id}>
          <ProductItem product={product}/>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
