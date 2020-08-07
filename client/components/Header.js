import React from 'react'
import { NavLink } from 'react-router-dom'
import CurrencyList from "./CurrencyList";

const activeClass = {
    activeClassName: "is-active"
}

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <NavLink className="header__link" to="/" exact={true} {...activeClass}>
                    Home
                </NavLink>
                <NavLink className="header__link" to="/order" {...activeClass}>
                    Order
                </NavLink>
                <NavLink className="header__link" to="/promo" {...activeClass}>
                    Promo
                </NavLink>
                <NavLink className="header__link" to="/delivery" {...activeClass}>
                    Delivery
                </NavLink>
                <NavLink className="header__link" to="/about" {...activeClass}>
                    About Us
                </NavLink>
                <CurrencyList />
            </div>
        </div>
    </header>
)

export default Header
