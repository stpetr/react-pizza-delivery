export const CART_INIT = 'CART_INIT'
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
export const CART_INCREMENT_QTY = 'CART_INCREMENT_QTY'
export const CART_DECREMENT_QTY = 'CART_DECREMENT_QTY'
export const CART_CLEAR = 'CART_CLEAR'

export const cartInit = (products) => ({
  type: CART_INIT,
  products
})

export const cartAddItem = (product) => ({
  type: CART_ADD_ITEM,
  product
})

export const cartRemoveItem = (product) => ({
  type: CART_REMOVE_ITEM,
  id: product._id
})

export const cartIncrementQty = (product) => ({
  type: CART_INCREMENT_QTY,
  id: product._id
})

export const cartDecrementQty = (product) => ({
  type: CART_DECREMENT_QTY,
  id: product._id
})

export const cartClear = () => ({
  type: CART_CLEAR
})
