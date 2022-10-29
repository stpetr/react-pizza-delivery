import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAddItem } from "../actions/cart"
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'

export const ProductItem = ({ product }) => {
  const { currency } = useSelector((state) => state)
  const dispatch = useDispatch()

  const onAddToCart = (product) => {
    dispatch(cartAddItem(product))
  }

  return (
    <div className="product-item">
      <div className="product-item__top">
        {product.image &&
          <img src={`${process.env.API_URL}product/${product._id}/image`} className="product-item__image" alt={product.title}/>
        }
        <div className="product-item__content">

          <h3 className="product-item__title">{product.title}</h3>
          <p className="product-item__description">{product.description}</p>
        </div>
      </div>
      <div className="product-item__bottom">
        <button className="btn -pill" onClick={() => onAddToCart(product)}>Add to cart</button>
        <span className="product-item__price">{getAmountInCurrencyFormatted(product.price, currency)}</span>
      </div>
    </div>
  )
}

export default ProductItem
