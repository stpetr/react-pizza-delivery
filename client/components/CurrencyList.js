import React from 'react'
import { connect } from 'react-redux'
import { changeCurrency } from '../actions/currency'

export class CurrencyList extends React.Component {
    isCurrentCurrency = (currency) => {
        return this.props.currency.currentCurrency.id === currency.id
    }
    render() {
        return (
            <ul className="currency-list">
                { this.props.currency.currencyList.map((currency) => (
                    <li key={currency.id}
                        className={this.isCurrentCurrency(currency) ? 'is-active' : ''}
                        onClick={() => this.props.changeCurrency(currency.id)}
                    >
                        <span>{currency.sign}</span>
                    </li>
                )) }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    currency: state.currency
})

const mapDispatchToProps = (dispatch) => ({
    changeCurrency: (currencyId) => dispatch(changeCurrency(currencyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)
