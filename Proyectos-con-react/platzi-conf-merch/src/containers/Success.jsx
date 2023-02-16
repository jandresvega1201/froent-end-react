import React from 'react';
import '../styles/Success.scss';
import {AppContext} from "../context/AppContext";
import {Map} from "../components/Map";
import {useGoogleAddress} from "../hooks/useGoogleAddress";

function Success () {
    const {state} = React.useContext(AppContext);
    const {buyer} = state;
     const address = useGoogleAddress(buyer[1].address)


    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[1].name} Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias</span>
            </div>
            <div className="Success-map">
                <Map address={address} />
            </div>
        </div>
    );
}

export {Success};