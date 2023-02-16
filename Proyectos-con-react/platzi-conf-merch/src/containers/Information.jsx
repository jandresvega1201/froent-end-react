import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../styles/Information.scss';
import {AppContext} from "../context/AppContext";

function Information () {

    const navigate = useNavigate();

    const {state, addToBuy} = React.useContext(AppContext);

    const form = useRef(null);

    const {cart} = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'postalCode': formData.get('postalCode'),
            'phone': formData.get('phone'),

        }
        addToBuy(buyer);
        navigate('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion del Contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name"/>
                        <input type="text" placeholder="Correo Electronico" name="email"/>
                        <input type="text" placeholder="Direccion" name="address"/>
                        <input type="text" placeholder="apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="Pais" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="text" placeholder="Codigo postal" name="postalCode"/>
                        <input type="text" placeholder="Telefono" name="phone"/>
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {
                    cart.map(item => (
                        <div className="Information-item" key={item.title}>
                            <div className="Information-element" key={item.title}>
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export {Information};