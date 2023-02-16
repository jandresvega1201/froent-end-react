import React from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        })
    }

    const addToBuy = (payload) => {
        setState({
            ...state,
            buyer: [state.buyer, payload]
        })
    }

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
        addToBuy,
        addNewOrder
    }
}

export {useInitialState}
