import React from 'react'
import { connect } from 'react-redux'
import { cartIncrementQty, cartDecrementQty, cartRemoveItem, cartClear } from '../actions/cart'
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'
import CurrencyList from "./CurrencyList";

export class CartWidget extends React.Component {
    getAmount = () => this.props.cart.reduce((amount, item) => amount + item.product.price * item.qty, 0)
    getProductsTotalQty = () => this.props.cart.reduce((totalQty, item) => totalQty + item.qty, 0)
    render() {
        return (
            <div className="cart-widget">
                <h3 className="cart-widget__title">
                    <div>
                        <span>Cart</span>
                        { this.props.cart.length > 0 &&
                            <span className="cart-widget__title-qty">({this.getProductsTotalQty()})</span>
                        }
                    </div>
                    <CurrencyList />
                </h3>
                { !this.props.cart.length &&
                    <div className="cart-widget__empty-message">The cart is empty. Please pick something from our menu</div>
                }
                { this.props.cart.length > 0 &&
                    <div>
                        <ul className="cart-widget__products">
                            { this.props.cart.map((item) => (
                                <li className="cart-widget__products-item" key={item.product._id}>
                                    <div className="cart-widget__products-item-info">
                                        <img className="cart-widget__products-item-image" src={`/uploads/products/${item.product.image}`} />
                                        <div>
                                            <div className="cart-widget__products-item-title">{item.product.title}</div>
                                            <div className="cart-widget__products-item-description">{item.product.description}</div>
                                        </div>
                                        <button className="cart-widget__products-item-remove-btn" onClick={() => this.props.cartRemoveItem(item.product)}>&times;</button>
                                    </div>

                                    <div className="cart-widget__products-item-qty-and-subtotal">
                                        <div>
                                            <button
                                                className="cart-widget__products-item-qty-btn"
                                                onClick={() => this.props.cartDecrementQty(item.product)}
                                                disabled={item.qty === 1 ? 'disabled' : ''}
                                            >&#8722;</button>
                                            <span className="cart-widget__products-item-qty-between-buttons">{item.qty}</span>
                                            <button className="cart-widget__products-item-qty-btn" onClick={() => this.props.cartIncrementQty(item.product)}>+</button>
                                        </div>
                                        <div>
                                            {getAmountInCurrencyFormatted(item.product.price * item.qty, this.props.currency)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-widget__amount">
                            <span className="cart-widget__amount-title">Total:</span>
                            <span className="cart-widget__amount-value">{getAmountInCurrencyFormatted(this.getAmount(), this.props.currency)}</span>
                        </div>
                        <button className="btn -pill cart-widget__checkout-btn" onClick={this.props.navigateToOrderPage}>Checkout</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    currency: state.currency,
})

const mapDispatchToProps = (dispatch) => ({
    cartIncrementQty: (product) => dispatch(cartIncrementQty(product)),
    cartDecrementQty: (product) => dispatch(cartDecrementQty(product)),
    cartRemoveItem: (product) => dispatch(cartRemoveItem(product)),
    cartClear: () => dispatch(cartClear())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget)
