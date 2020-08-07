import {
    CHANGE_CURRENCY
} from '../actions/currency'

const CURRENCY_USD = 'USD'
const CURRENCY_EUR = 'EUR'
const availableCurrencies = [
    {
        id: CURRENCY_USD,
        name: 'US Dollar',
        sign: '$',
        rate: 1
    },
    {
        id: CURRENCY_EUR,
        name: 'Euro',
        sign: '€',
        rate: 1.8
    }
]

const getCurrencyById = (id) => availableCurrencies.find((currency) => currency.id === id)

const initialState = {
    currencyList: availableCurrencies,
    currentCurrency: getCurrencyById(CURRENCY_USD)
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            const newCurrentCurrency = getCurrencyById(action.currencyId)
            if (newCurrentCurrency) {
                return {
                    ...state,
                    currentCurrency: newCurrentCurrency
                }
            }
            console.warn('Failed to change currency')
            return state
        default:
            return state
    }
}

export default currencyReducer
