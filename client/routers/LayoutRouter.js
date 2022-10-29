import React from 'react'
import { Route } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

const LayoutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    <div className="layout-wrap">
      <Header/>
      <div className="layout-component-wrap content-container">
        <Component {...props} />
      </div>
      <Footer/>
    </div>
  )}/>
)

export default LayoutRoute
