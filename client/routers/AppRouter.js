import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import LayoutRoute from './LayoutRouter'
import HomePage from '../components/HomePage'
import OrderPage from '../components/OrderPage'
import PromoPage from '../components/PromoPage'
import DeliveryPage from '../components/DeliveryPage'
import NotFoundPage from '../components/NotFoundPage'
import OrderConfirmPage from '../components/OrderConfirmPage'
import OrderSuccessPage from '../components/OrderSuccessPage'
import AboutUsPage from "../components/AboutUsPage";

export const history = createBrowserHistory()

const AppRouter = () => (
    <BrowserRouter history={history}>
        <Switch>
            <LayoutRoute path="/" component={HomePage} exact={true} />
            <LayoutRoute path="/order" component={OrderPage} />
            <LayoutRoute path="/order-confirm" component={OrderConfirmPage} />
            <LayoutRoute path="/order-success" component={OrderSuccessPage} />
            <LayoutRoute path="/promo" component={PromoPage} />
            <LayoutRoute path="/delivery" component={DeliveryPage} />
            <LayoutRoute path="/about" component={AboutUsPage} />
            <LayoutRoute component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter
