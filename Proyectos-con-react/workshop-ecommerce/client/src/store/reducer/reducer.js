
export const initialState = {
    products: [],
    copyProducts: [],
    detailProduct: [],
    cartShopping: [],

}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                copyProducts: action.payload
            }
        case 'DETAIL-PRODUCT':
            return {
                ...state,
                detailProduct: action.payload
            }
        case 'SELECT_CATEGORY':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_CART_SHOPPING':
            return {
                ...state,
                cartShopping :[...state.cartShopping, action.payload]



            }
        default:
            return state
    }
}