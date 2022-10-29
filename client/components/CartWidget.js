import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartIncrementQty, cartDecrementQty, cartRemoveItem } from '../actions/cart'
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'
import CurrencyList from './CurrencyList'

export const CartWidget = ({ navigateToOrderPage }) => {
  const { cart, currency } = useSelector((state) => state)
  const dispatch = useDispatch()

  const productsTotalQty = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.qty, 0)
  }, [cart, currency])

  const amount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  }, [cart])

  const removeProduct = (product) => {
    dispatch(cartRemoveItem(product))
  }

  const decrementProductQty = (product) => {
    dispatch(cartDecrementQty(product))
  }

  const incrementProductQty = (product) => {
    dispatch(cartIncrementQty(product))
  }

  return (
    <div className="cart-widget">
      <h3 className="cart-widget__title">
        <div>
          <span>Cart</span>
          {cart.length > 0 &&
            <span className="cart-widget__title-qty">({productsTotalQty})</span>
          }
        </div>
        <CurrencyList/>
      </h3>
      {!cart.length &&
        <div className="cart-widget__empty-message">The cart is empty. Please pick something from our menu</div>
      }
      {cart.length > 0 &&
        <div>
          <ul className="cart-widget__products">
            {cart.map(({ product, qty }) => (
              <li className="cart-widget__products-item" key={product._id}>
                <div className="cart-widget__products-item-info">
                  <img className="cart-widget__products-item-image"
                    src={`${process.env.API_URL}product/${product._id}/image`} alt=""/>
                  <div>
                    <div className="cart-widget__products-item-title">{product.title}</div>
                    <div className="cart-widget__products-item-description">{product.description}</div>
                  </div>
                  <button className="cart-widget__products-item-remove-btn"
                    onClick={() => removeProduct(product)}>&times;</button>
                </div>

                <div className="cart-widget__products-item-qty-and-subtotal">
                  <div>
                    <button
                      className="cart-widget__products-item-qty-btn"
                      onClick={() => decrementProductQty(product)}
                      disabled={qty === 1}
                    >&#8722;</button>
                    <span className="cart-widget__products-item-qty-between-buttons">{qty}</span>
                    <button className="cart-widget__products-item-qty-btn"
                      onClick={() => incrementProductQty(product)}>+
                    </button>
                  </div>
                  <div>
                    {getAmountInCurrencyFormatted(product.price * qty, currency)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-widget__amount">
            <span className="cart-widget__amount-title">Total:</span>
            <span className="cart-widget__amount-value">{getAmountInCurrencyFormatted(amount, currency)}</span>
          </div>
          <button className="btn -pill cart-widget__checkout-btn" onClick={navigateToOrderPage}>Checkout</button>
        </div>
      }
    </div>
  )
}

export default CartWidget
