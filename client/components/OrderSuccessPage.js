import React from 'react'
import { connect } from 'react-redux'
import { clearOrder } from '../actions/order'
import { cartClear } from '../actions/cart'

export class OrderSuccessPage extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props.order.isValidated || !this.props.cart.length) {
            this.props.history.push('/')
        }

        this.props.clearOrder()
        this.props.cartClear()
    }
    render() {
        return (
            <div className="page page__order-success">
                <p>
                    Congratulations! You've successfully submitted your order!
                    Our chef is already baking your pizza and our super delivery service will deliver it the moment it's out of the oven!
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    order: state.order,
})

const mapDispatchToProps = (dispatch) => ({
    clearOrder: () => dispatch(clearOrder()),
    cartClear: () => dispatch(cartClear())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessPage)
