import React from 'react';
import ProductList from "./ProductList";
import CartWidget from "./CartWidget";

const HomePage = () => (
    <div className="page page__home">
        <h1 className="page__heading">Welcome to our Pizza restaurant!</h1>
        <h2 className="page__home__menu-heading">Here's what we've got for you:</h2>
        <div className="with-sidebar">
            <ProductList />
            <div className="sidebar">
                <CartWidget />
            </div>
        </div>
    </div>
);

export default HomePage;
