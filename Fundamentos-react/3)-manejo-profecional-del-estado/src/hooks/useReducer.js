const initialState = {
    value:'',
    loading: false,
    error: false,
    deleted: false,
    confirmed: false,
}

//const reducer = (state, action) => {}

//Tres formas de crear reducers


//primer forma de crear un reducer
const reducerIf = (state, action) => {
    if (action.type === 'ERROR'){
        return {
            ...state,
            error: true,
            loading: false
        }
    }else if (action.type === 'CHECK'){
        return {
            ...state,
            loading: true
        }
    }else {
        return {
            ...state
        }
    }
}

//Segunda forma de crear un reducer
const reducerSwitch = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false
            }
        case 'CHECK':
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state
            }
    }
}

//Tercera forma de crear un reducer
const reducerObject = (state, payload) => ({
    'ERROR': {
        ...state,
        loading: false,
        error: true
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    'WRITE': {
        ...state,
        value: payload
    },
    'CHECK': {
        ...state,
        loading: true
    },
    'DELETE': {
        ...state,
        deleted: true
    },
    'RESET': {
        ...state,
        confirmed: false,
        deleted: false
    }
})

const reducer = (state, action) => {
    if (reducerObject(state, action.payload)[action.type]){
        return reducerObject(state)[action.type]
    }else {
        return state
    }
}
