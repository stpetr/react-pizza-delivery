import React from 'react'
import { connect } from 'react-redux'

export class CartWidget extends React.Component {
    calcAmount = () => {
        let amount = 0
        this.props.cart.forEach((item) => amount += item.product.price * item.qty)
        return amount
    }
    render() {
        return (
            <div className="cart-widget">
                { !this.props.cart.length &&
                    <div>No items added</div>
                }
                { this.props.cart.length &&
                    <div>
                        <div>Cart: { this.props.cart.length }</div>
                        <div>Amount: {this.calcAmount()}</div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

export default connect(mapStateToProps)(CartWidget)
