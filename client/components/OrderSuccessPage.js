import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearOrder } from '../actions/order'
import { cartClear } from '../actions/cart'

export const OrderSuccessPage = () => {
  const history = useHistory()
  const { cart, order } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!order.isValidated || !cart.length) {
      history.push('/')
    }

    dispatch(clearOrder())
    dispatch(cartClear())
  }, [])

  return (
    <div className="page page__order-success">
      <p>
        Congratulations! You've successfully submitted your order!
        Our chef is already baking your pizza and our super delivery service will deliver it the moment it's out of the
        oven!
      </p>
    </div>
  )
}

export default OrderSuccessPage
