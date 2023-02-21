import axios from "axios";

export function getData() {
    return async (dispatch) => {
        console.log(dispatch)
        let products = await axios('http://localhost:3006/productos');
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: products.data
        })
    }
}