import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../actions/order'
import { isOrderInfoValid } from '../helpers/order'
import CartWidget from './CartWidget'

export const OrderPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { order, cart } = useSelector(state => state)
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    lastName: '',
    address: '',
    note: '',
    ...order,
    error: '',
  })
  const orderInfoRef = useRef()
  const isOrderValid = useMemo(() => isOrderInfoValid(orderInfo) && cart.length > 0, [orderInfo, cart])

  const saveOrder = () => {
    const orderInfoTrim = {}
    const orderInfo = orderInfoRef.current
    for (let key in orderInfo) {
      orderInfoTrim[key] = String(orderInfo[key]).trim()
    }
    dispatch(updateOrder(orderInfoTrim))
  }

  useEffect(() => {
    // Always save order info when leaving this page
    return () => {
      saveOrder()
    }
  }, [])

  useEffect(() => {
    orderInfoRef.current = orderInfo
  }, [orderInfo])

  const onOrderInfoChange = (prop, e) => {
    const value = e.target.value

    setOrderInfo((prev) => {
      return {
        ...prev,
        [prop]: value,
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log('Submitting', isOrderValid)

    if (isOrderValid) {
      saveOrder()
      history.push('/order-confirm')
    } else {
      setOrderInfo((prev) => {
        return {
          ...prev,
          error: 'Something went wrong',
        }
      })
    }
  }

  return (
    <div className="page page__order">
      <h1>Complete your order's details</h1>
      {order.error &&
        <div className="form__error">
          <p>An error occurred, please try again later</p>
          <p>Details: {order.error}</p>
        </div>
      }
      <div className="with-sidebar">
        <div className="content">
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              className="text-input"
              placeholder="Name"
              autoFocus
              value={orderInfo.name}
              onChange={onOrderInfoChange.bind(null, 'name')}
            />
            <input
              type="text"
              className="text-input"
              placeholder="Last Name"
              autoFocus
              value={orderInfo.lastName}
              onChange={onOrderInfoChange.bind(null, 'lastName')}
            />
            <input
              type="text"
              className="text-input -full-width"
              placeholder="Address"
              autoFocus
              value={orderInfo.address}
              onChange={onOrderInfoChange.bind(null, 'address')}
            />
            <textarea
              className="text-input -textarea -full-width"
              placeholder="Type us something"
              value={orderInfo.note}
              onChange={onOrderInfoChange.bind(null, 'note')}
            >&nbsp;</textarea>
            <div>
              <input type="submit" value="Next" className="btn -pill" disabled={!isOrderValid}/>
            </div>
          </form>
        </div>
        <div className="sidebar">
          <CartWidget/>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
