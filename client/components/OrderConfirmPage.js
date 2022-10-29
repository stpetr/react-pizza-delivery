import React, { useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'

export const OrderConfirmPage = () => {
  const history = useHistory()
  const { cart, currency, order } = useSelector((state) => state)
  const deliveryPrice = 2.5
  const freeDeliveryThreshold = 50

  const productsCost = useMemo(() => cart.reduce((acc, item) => acc + item.product.price * item.qty, 0), [cart])
  const deliveryCost = useMemo(() => productsCost > freeDeliveryThreshold ? 0 : deliveryPrice, [productsCost])
  const totalAmount = useMemo(() => productsCost + deliveryCost, [productsCost, deliveryCost])

  useEffect(() => {
    if (!order.isValidated || !cart.length) {
      history.push('/')
    }
  }, [])

  const confirmOrder = () => {
    history.push('/order-success')
  }

  const getBack = () => {
    history.push('/order')
  }

  return (
    <div className="page page__order-confirm">
      <h1 className="page__heading">You're just one step away</h1>
      <p>
        Check your order's details. If it's ok then hit the Submit button then we'll start baking your pizza
        immediately
      </p>
      <div className="order-info">
        <p className="order-info__section-title">You've chosen these items:</p>
        <ul className="order-info__products">
          {cart.map(({ product, qty }) => (
            <li key={product._id}>
              <span>{product.title}</span>
              <span>
                {qty} &times; {getAmountInCurrencyFormatted(product.price, currency)}
                <span>&nbsp;=&nbsp;</span>
                {getAmountInCurrencyFormatted(product.price * qty, currency)}
              </span>
            </li>
          ))}
        </ul>
        <div className="order-info__subtotal">Subtotal: {getAmountInCurrencyFormatted(productsCost, currency)}</div>

        <p className="order-info__section-title">Delivery info:</p>
        <ul className="order-info__delivery">
          <li>Name: {order.name}</li>
          <li>Last Name: {order.lastName}</li>
          <li>Address: {order.address}</li>
          <li>Note: {order.note}</li>
        </ul>
        <div className="order-info__subtotal">Delivery
          Cost: {getAmountInCurrencyFormatted(deliveryCost, currency)}</div>
        <div className="order-info__total">Total: {getAmountInCurrencyFormatted(totalAmount, currency)}</div>
      </div>

      <div className="action-buttons">
        <button className="btn -pill" onClick={confirmOrder}>Take my money!</button>
        <button className="btn -pill -cancel" onClick={getBack}>Get back</button>
      </div>
    </div>
  )
}

export default OrderConfirmPage
