import React from 'react';
import {initialState, reducer} from "../store/reducer/reducer";
import axios from "axios";
const StoreContext = React.createContext({})
function StoreProvider({children}) {

    const [store, dispatch] = React.useReducer(reducer, initialState)
    const [conter, setConter] = React.useState(0);
    React.useEffect(() => {
        axios('https://prueba-vercel-bn96-47kyihgts-jandres-vega.vercel.app/productos').then((res) => {
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data
            })
        })
    }, []);

    return (
        <StoreContext.Provider value={{
            store,
            dispatch,
            conter,
            setConter
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreContext, StoreProvider}