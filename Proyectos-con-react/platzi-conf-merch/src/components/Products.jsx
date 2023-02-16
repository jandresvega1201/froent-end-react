import React from 'react';
import {Product} from "./Product";
import '../styles/Products.scss';
import {AppContext} from "../context/AppContext";

function Products () {

    const {state, addToCart} = React.useContext(AppContext);

    const handleAddToCart = (product) => {
        addToCart(product)
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    state.products.map(item => (
                        <Product key={item.id} product={item} handleAddToCart={handleAddToCart} />
                    ))
                }
            </div>
        </div>
    );
}

export {Products};