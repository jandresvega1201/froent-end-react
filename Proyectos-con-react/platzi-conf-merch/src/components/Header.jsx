import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Header.scss';
import {AppContext} from "../context/AppContext";

function Header () {

    const {state} = React.useContext(AppContext);
    const {cart}= state;
    return (
        <header className="Header">
            <h1 className="Header-title">
                <Link to="/">
                    PlatziConf Merge
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="checkout">
                    <i className="fas fa-shopping-basket" />
                </Link>
                 {
                    cart.length > 0 && <div className="Header-alert">{cart.length}</div>
                 }
            </div>
        </header>
    );
}

export {Header};