import React from 'react'
import { connect } from 'react-redux'
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'

export class OrderConfirmPage extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props.order.isValidated || !this.props.cart.length) {
            this.props.history.push('/')
        }

        this.state  = {
            deliveryCost: 2.5,
            freeDeliveryThreshold: 50
        }
    }
    getDeliveryCost = () => {
        if (this.getProductsAmount() > this.state.freeDeliveryThreshold) {
            return 0
        }
        return this.state.deliveryCost
    }
    getProductsAmount = () => this.props.cart.reduce((amount, item) => amount + item.product.price * item.qty, 0)
    getTotalAmount = () => this.getProductsAmount() + this.getDeliveryCost()
    confirmOrder = () => {
        this.props.history.push('/order-success')
    }
    getBack = () => {
        this.props.history.push('/order')
    }
    render() {
        return (
            <div className="page page__order-confirm">
                <h1 className="page__heading">You're just one step away</h1>
                <p>Check your order's details. If it's ok then hit the Submit button then we'll start baking your pizza immediately</p>
                <div className="order-info">
                    <p className="order-info__section-title">You've chosen these items:</p>
                    <ul className="order-info__products">
                        { this.props.cart.map((cartItem) => (
                            <li key={cartItem.product._id}>
                                <span>{cartItem.product.title}</span>
                                <span>
                                    {cartItem.qty} &times; {getAmountInCurrencyFormatted(cartItem.product.price, this.props.currency)}
                                    <span>&nbsp;=&nbsp;</span>
                                    {getAmountInCurrencyFormatted(cartItem.product.price * cartItem.qty, this.props.currency)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="order-info__subtotal">Subtotal: {getAmountInCurrencyFormatted(this.getProductsAmount(), this.props.currency)}</div>

                    <p className="order-info__section-title">Delivery info:</p>
                    <ul className="order-info__delivery">
                        <li>Name: {this.props.order.name}</li>
                        <li>Last Name: {this.props.order.lastName}</li>
                        <li>Address: {this.props.order.address}</li>
                        <li>Note: {this.props.order.note}</li>
                    </ul>
                    <div className="order-info__subtotal">Delivery Cost: {getAmountInCurrencyFormatted(this.getDeliveryCost(), this.props.currency)}</div>
                    <div className="order-info__total">Total: {getAmountInCurrencyFormatted(this.getTotalAmount(), this.props.currency)}</div>
                </div>

                <div className="action-buttons">
                    <button className="btn -pill" onClick={this.confirmOrder}>Take my money!</button>
                    <button className="btn -pill -cancel" onClick={this.getBack}>Get back</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    order: state.order,
    currency: state.currency,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmPage)
