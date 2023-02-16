import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Checkout.scss';
import {AppContext} from "../context/AppContext";

function Checkout () {

    const {state,removeFromCart} = React.useContext(AppContext);
    const {cart} = state;

    const handleRemove = (product) => {
        removeFromCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (accomulator, currenValue) => accomulator +currenValue.price
        return cart.reduce(reducer, 0)
    }
    return (
        <div className="Checkout">
            <div className="Checkout-content" >
                <h3>Lista de pedidos:</h3>
                {/* <h3>{cart.length > 0 ? <h3>Lista de Pedidos</h3>: <h3>Sin Pedidos.....</h3>}</h3> */}
                {
                    cart.map(item => (
                        <div className="Checkout-item" key={item.title}>
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                            <button type="button" onClick={() => handleRemove(item)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar Pedido</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export {Checkout};