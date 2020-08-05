import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget";

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__link" to="/">
                    Home
                </Link>
                <Link className="header__link" to="/order">
                    Order
                </Link>
                <Link className="header__link" to="/promo">
                    Promo
                </Link>
                <Link className="header__link" to="/delivery">
                    Delivery
                </Link>
                <Link className="header__link" to="/about">
                    About Us
                </Link>
                <CartWidget />
            </div>
        </div>
    </header>
)

export default Header
