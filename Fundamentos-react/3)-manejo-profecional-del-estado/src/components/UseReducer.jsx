import React from 'react';

const SECURITY_CODE = ''
const initialState = {
    value:'',
    loading: false,
    error: false,
    deleted: false,
    confirmed: false,
}
const UseReducer = ({name}) => {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(() => {
        if (!!state.loading){
            setTimeout(() => {
                if (state.value === SECURITY_CODE){
                    dispatch({
                        type: actionTypes.confirm
                    })
                }else {
                    dispatch({
                        type: actionTypes.error
                    })
                }
            }, 3000);
        }
    },[state.loading])

    if (!state.deleted && !state.confirmed){
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el codigo de seguridad</p>
                {
                    (state.error && !state.loading) && (
                        <p>Error el codigo es incorrecto</p>
                    )
                }
                {
                    state.loading && (
                        <p>Cargando......</p>
                    )
                }
                <input
                    placeholder="Codigo de seguridad"
                    value={state.payload}
                    type="text"
                    onChange={(e) => {
                        dispatch(
                            {
                                type: actionTypes.write,
                                payload:e.target.value
                            }
                        )
                        // onWrite(e)
                    }}
                />
                <button onClick={() =>{
                    dispatch({type: actionTypes.check})
                    // onCheck()
                }}>Comprobar</button>
            </div>
        )
    }else if(state.confirmed && !state.deleted){
        return (
            <React.Fragment>
                <p>Pedimos confirmacion. Estas seguro?</p>
                <button
                    onClick={() => {
                        dispatch({
                            type: actionTypes.delete
                        })
                    }}
                >Si, eliminar</button>
                <button
                    onClick={() => {
                        dispatch({
                            type: actionTypes.reset
                        })

                    }}
                >Cancelar</button>
            </React.Fragment>
        )
    }else {
        return (
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                    onClick={() => {
                        dispatch({
                            type: actionTypes.reset
                        })
                    }}
                >Resetear, volver atras</button>
            </React.Fragment>
        )
    }
};
const reducerObject = (state, payload) => ({
    [actionTypes.error] : {
        ...state,
        loading: false,
        error: true
    },
    [actionTypes.confirm] : {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    [actionTypes.write] : {
        ...state,
        value: payload
    },
    [actionTypes.check] : {
        ...state,
        loading: true
    },
    [actionTypes.delete] : {
        ...state,
        deleted: true
    },
    [actionTypes.reset] : {
        ...state,
        confirmed: false,
        deleted: false
    }
})

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    reset: 'RESET',
    delete: 'DELETE',
    write: 'WRITE'
}

const reducer = (state, action) => {
    if (reducerObject(state, action.payload)[action.type]){
        return reducerObject(state)[action.type]
    }else {
        return state
    }
}
export {UseReducer};