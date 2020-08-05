import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

class ProductList extends React.Component {
    render() {
        const { loading, error, products } = this.props

        if (error) {
            return (
                <div className="product-list-failure">
                    <p>{error}</p>
                </div>
            )
        }

        if (loading) {
            return (
                <div className="product-list-loading"></div>
            )
        }

        return (
            <ul className="product-list">
                {products.map(product =>
                    <li className="product-list__item" key={product._id}>
                        <ProductItem product={product} />
                    </li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.items,
    error: state.products.error
})

export default connect(mapStateToProps)(ProductList)
