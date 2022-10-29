import {
  CART_INIT,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INCREMENT_QTY,
  CART_DECREMENT_QTY,
  CART_CLEAR,
} from '../actions/cart'
import { cartLocalStorage } from '../store/localStorage'

const cartReducerDefaultState = []

const removeItem = (state, action) => {
  return state.filter(({ product }) => product._id !== action.product._id)
}

const changeItemQty = (state, action, value) => {
  return state.map((item) => {
    if (item.product._id === action.product._id) {
      return {
        product: item.product,
        qty: item.qty + value,
      }
    }

    return item
  })
}

export default (state = cartReducerDefaultState, action) => {
  let cartData

  switch (action.type) {
    case CART_INIT:
      cartData = cartLocalStorage.getCart()
      const cart = []
      for (const productId in cartData) {
        const product = action.products.find((product) => {
          return product._id === productId
        })

        if (!product || cartData[productId] <= 0) {
          continue
        }

        cart.push({
          product,
          qty: cartData[productId],
        })
      }

      return cart
    case CART_ADD_ITEM:
      if (state.find(({ product }) => product._id === action.product._id)) {
        cartLocalStorage.incrementQty(action.product._id)
        return changeItemQty(state, action, 1)
      }

      cartLocalStorage.addItem(action.product._id)
      return [
        ...state,
        {
          product: action.product,
          qty: 1,
        },
      ]
    case CART_REMOVE_ITEM:
      cartLocalStorage.removeItem(action.product._id)
      return removeItem(state, action)
    case CART_INCREMENT_QTY:
      cartLocalStorage.incrementQty(action.product._id)
      return changeItemQty(state, action, 1)
    case CART_DECREMENT_QTY:
      const item = state.find(({ product }) => product._id === action.product._id)
      if (item.qty === 1) {
        return state
      }
      cartLocalStorage.decrementQty(action.product._id)
      return changeItemQty(state, action, -1)
    case CART_CLEAR:
      cartLocalStorage.clear()
      return cartReducerDefaultState
    default:
      return state
  }
}
