export const FETCH_PRODUCTS_PENDING   = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const fetchProductsPending = () => ({
    type: FETCH_PRODUCTS_PENDING
})

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
})

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
})

// Handle HTTP errors since fetch won't
const handleHttpErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsPending())
        return fetch(process.env.API_URL + 'products')
            .then(handleHttpErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchProductsSuccess(json))
                return json
            })
            .catch(error => dispatch(fetchProductsFailure(error)))
    }
}
