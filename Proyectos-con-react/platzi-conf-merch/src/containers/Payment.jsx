import React from 'react';
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js';
import '../styles/Payment.scss';
import {AppContext} from "../context/AppContext";

function Payment () {
    const navigate = useNavigate();
    const {state, addNewOrder} = React.useContext(AppContext);
    const {cart, buyer} = state;

    const paypalOptions = {
        clientId: 'AStwBLPTb4guCX1YRKgSTsb--9To_Aw6J4PkbU8Mc-NyGEYUahOTMXpLt6z_PBMYrxkOuwkTtZHFqWgp',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'pill',
    }
    const handlePaymentSuccess = (data, actions) => actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '4'
                    }
                }
            ]
        })
    const handleAprove = (data, actions) =>
         actions.order.capture().then((details) => {
             if (details.status === 'COMPLETED') {
                 const newOrder = {
                     buyer,
                     product: cart,
                     payment: details
                 }
                 addNewOrder(newOrder)
                 navigate('/checkout/success')
             }

        })


    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {
                    cart.map(item => (
                        <div className="Payment-item" key={item.id}>
                            <div className="Payment-element">
                                <h4>{item.id}</h4>
                                <span>
                                    $
                                    {' '}
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))
                }
                <div className="Payment-button">
                    <PayPalScriptProvider paypalOptions={paypalOptions} >
                         <PayPalButtons
                             style={buttonStyles}
                             createOrder={(data, actions) =>handlePaymentSuccess(data, actions)}
                             onApprove={(data, actions) =>handleAprove(data, actions)}
                         />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}


export {Payment};