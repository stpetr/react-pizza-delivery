export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

export const changeCurrency = (currencyId) => ({
  type: CHANGE_CURRENCY,
  currencyId,
})
