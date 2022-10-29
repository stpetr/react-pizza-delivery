import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/products'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products,
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      }

    default:
      return state
  }
}

export default productReducer
