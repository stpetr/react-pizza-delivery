import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrency } from '../actions/currency'

export const CurrencyList = () => {
  const dispatch = useDispatch()
  const { currencyList, currentCurrency } = useSelector(({ currency }) => currency )

  const handleChangeCurrency = (currencyId) => {
    dispatch(changeCurrency(currencyId))
  }

  return (
    <ul className="currency-list">
      {currencyList.map(({ id, sign }) => (
        <li key={id}
          className={currentCurrency.id === id ? 'is-active' : ''}
          onClick={() => handleChangeCurrency(id)}
        >
          <span>{sign}</span>
        </li>
      ))}
    </ul>
  )
}

export default CurrencyList
