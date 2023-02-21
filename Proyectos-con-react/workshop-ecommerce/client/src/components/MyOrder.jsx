import React from 'react';
import '../styles/ListItem.css';
import {StoreContext} from "../TodoContext";
import ListItem from "./ListItem";
const MyOrder = () => {

    const {store} = React.useContext(StoreContext);
    const {cartShopping} = store

    console.log(cartShopping)

    return (
        <div className="div-cart">
            <h3>Cart</h3>
            <hr />
            {
                cartShopping.map(item => (
                    <ListItem
                        key={item.id}
                        image={item.img1}
                        emprese={item.empresa}
                        price={item.precio}
                    />
                ))
            }

            <div className="div-btn">
                <button className="btn-checkout">Checkout</button>
            </div>
        </div>
        // <div className="container-order">
        //     {
        //         cartShopping.map(item => (
        //             <ListItem
        //                 key={item.id}
        //                 image={item.img1}
        //                 emprese={item.empresa}
        //                 price={item.precio}
        //             />
        //         ))
        //     }
        //     <div className="div-checkout">
        //         <button>Checkout</button>
        //     </div>
        // </div>

    );
};

export default MyOrder;


