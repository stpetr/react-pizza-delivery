import {
  ORDER_UPDATE,
  ORDER_CLEAR,
} from '../actions/order'
import { isOrderInfoValid } from '../helpers/order'

const initialState = {
  name: '',
  lastName: '',
  address: '',
  note: '',
  delivery: '',
  error: '',
  isValidated: false,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_UPDATE:
      const formData = action.formData

      formData.isValidated = isOrderInfoValid(formData)

      return {
        ...state,
        ...formData,
      }
    case ORDER_CLEAR:
      return initialState
    default:
      return state
  }
}

export default orderReducer
