import numeral from 'numeral'

export const getAmountInCurrency = (price, currency) => {
  return price * currency.currentCurrency.rate
}

export const getAmountInCurrencyFormatted = (price, currency) => {
  let format = "0,0.00"
  return currency.currentCurrency.sign + numeral(getAmountInCurrency(price, currency)).format(format.toString())
}
