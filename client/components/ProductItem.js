import React from 'react'
import { connect } from 'react-redux'
import { cartAddItem } from "../actions/cart";

export class ProductItem extends React.Component {
    render() {
        const { product } = this.props
        return (
            <div className={'product-item'}>
                { product.image &&
                    <img src={`/uploads/products/${product.image}`} className="product-item__image" />
                }
                <div className="product-item__content">
                    <h3 className="product-item__title">{product.title}</h3>
                    <p className="product-item__description">{product.description}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (product) => dispatch(cartAddItem(product))
})

export default connect(undefined, mapDispatchToProps)(ProductItem)
