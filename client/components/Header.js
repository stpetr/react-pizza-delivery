import React from 'react'
import { NavLink } from 'react-router-dom'
import CurrencyList from "./CurrencyList"

const navItems = [
  {
    text: 'Home',
    to: '/',
    exact: true,
  },
  {
    text: 'Promo',
    to: '/promo',
  },
  {
    text: 'Delivery',
    to: '/delivery',
  },
  {
    text: 'About Us',
    to: '/about',
  },
]

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        {navItems.map(({ text, ...attrs }) => (
          <NavLink key={text} className="header__link" activeClassName="is-active"  {...attrs}>{text}</NavLink>
        ))}
        <CurrencyList/>
      </div>
    </div>
  </header>
)

export default Header
