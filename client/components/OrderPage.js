import React from 'react'
import { connect } from 'react-redux'
import { updateOrder, clearOrder } from '../actions/order'
import CartWidget from './CartWidget'

export class OrderPage extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props.cart.length) {
            this.props.history.push('/')
        }

        this.state = {
            name: this.props.order.name,
            lastName: this.props.order.lastName,
            address: this.props.order.address,
            note: this.props.order.note,
            error: '',
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.cart.length) {
            this.props.history.push('/')
        }
    }
    isOrderValid = () => this.props.order.isValidated && this.props.cart.length
    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }), () => this.props.updateOrder(this.state))
    }
    onLastNameChange = (e) => {
        const lastName = e.target.value
        this.setState(() => ({ lastName }), () => this.props.updateOrder(this.state))
    }
    onAddressChange = (e) => {
        const address = e.target.value
        this.setState(() => ({ address }), () => this.props.updateOrder(this.state))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }), () => this.props.updateOrder(this.state))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.props.order.isValidated) {
            this.props.history.push('/order-confirm')
        } else {
            this.setState(() => ({ error: 'Something went wrong' }), () => this.props.updateOrder(this.state))
        }
    }
    render() {
        return (
            <div className="page page__order">
                <h1>Complete your order's details</h1>
                { this.props.order.error &&
                    <div className="form__error">
                        <p>An error occurred, please try again later</p>
                        <p>Details: {this.props.order.error}</p>
                    </div>
                }
                <div className="with-sidebar">
                    <div className="content">
                        <form className="form" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.onNameChange}
                            />
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Last Name"
                                autoFocus
                                value={this.state.lastName}
                                onChange={this.onLastNameChange}
                            />
                            <input
                                type="text"
                                className="text-input -full-width"
                                placeholder="Address"
                                autoFocus
                                value={this.state.address}
                                onChange={this.onAddressChange}
                            />
                            <textarea
                                className="text-input -textarea -full-width"
                                placeholder="Type us something"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                            >&nbsp;</textarea>
                            <div>
                                <input type="submit" value="Next" className="btn -pill" disabled={this.isOrderValid() ? '' : 'disabled' } />
                            </div>
                        </form>
                    </div>
                    <div className="sidebar">
                        <CartWidget />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.order,
    cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
    updateOrder: (formData) => dispatch(updateOrder(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
