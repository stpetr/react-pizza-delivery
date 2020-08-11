import React from 'react'
import { connect } from 'react-redux'
import { cartAddItem } from "../actions/cart";
import { getAmountInCurrencyFormatted } from '../helpers/amount-in-currency'

export class ProductItem extends React.Component {
    onAddToCart = (product) => {
        this.props.cartAddItem(product)
    }
    render() {
        const { product } = this.props
        return (
            <div className="product-item">
                <div className="product-item__top">
                    { product.image &&
                    <img src={`${process.env.API_URL}product/${product._id}/image`} className="product-item__image" />
                    }
                    <div className="product-item__content">

                        <h3 className="product-item__title">{product.title}</h3>
                        <p className="product-item__description">{product.description}</p>
                    </div>
                </div>
                <div className="product-item__bottom">
                    <button className="btn -pill" onClick={() => this.onAddToCart(product)}>Add to cart</button>
                    <span className="product-item__price">{getAmountInCurrencyFormatted(product.price, this.props.currency)}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currency: state.currency
})

const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (product) => dispatch(cartAddItem(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
