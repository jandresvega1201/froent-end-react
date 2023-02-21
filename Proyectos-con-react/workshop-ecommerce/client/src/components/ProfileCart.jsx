import React from 'react';
import '../styles/ProfileCart.css'
import cart from '../img/icon-cart.svg';
import procfile from '../img/image-avatar.png'
import {StoreContext} from "../TodoContext";
const ProfileCart = ({handleCart}) => {
    const {store} = React.useContext(StoreContext)
    const {cartShopping} = store

    return (
        <div className="container-profile">
            <span className="num-carrito">{cartShopping.length}</span>
            <img onMouseEnter={handleCart} className="icon-cart" src={cart} alt="icon-cart" />
            <img className="user-profile" src={procfile} alt="icon-procfile"/>
        </div>
    );
};

export default ProfileCart;