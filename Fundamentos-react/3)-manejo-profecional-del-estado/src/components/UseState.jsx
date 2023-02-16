import React from 'react';

const SECURITY_CODE = ''
const UseState = ({name}) => {

    // const [error, setError] = React.useState(false); //Estados independoentes
    // const [loading, setLoading] = React.useState(false);//Estados independoentes
    // const [value, setValue] = React.useState('');//Estados independoentes
    const [state, setState] = React.useState({
        value:'',
        loading: false,
        error: false,
        deleted: false,
        confirmed: false,
    })

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true
        })
    }

    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true
        })
    }

    const onWrite = (e) => {
        setState({
            ...state,
            value: e.target.value
        })
    }
    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false
        })
    }
    React.useEffect(() => {
        //console.log("Empezando efecto")
        if (!!state.loading){
            setTimeout(() => {
                //console.log("haciendo validacion")
                if (state.value === SECURITY_CODE){
                    onConfirm();
                    // setState({
                    //     ...state,
                    //     error: false,
                    //     loading: false,
                    //     confirmed: true
                    // })
                    // setLoading(false)

                }else {
                    onError()
                    // setState({
                    //     ...state,
                    //     loading: false,
                    //     error: true
                    // })
                    // setLoading(false);
                    // setError(true)
                }
                //console.log("terminando validacion")
            }, 3000);
        }
        //console.log("Terminando efecto")
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
                    value={state.value}
                    type="text"
                    onChange={(e) => {
                        onWrite(e)
                        // setState({
                        //     ...state,
                        //     value: e.target.value
                        // })
                        // setValue(e.target.value);
                        // setError(false)
                    }}
                />
                <button onClick={() =>{
                    onCheck()
                    // setState({
                    //     ...state,
                    //     loading: true
                    // })
                    // setLoading(true);
                    // setError(false)
                }}>Comprobar</button>
            </div>
        )
    }else if(state.confirmed && !state.deleted){
        return (
            <React.Fragment>
                <p>Pedimos confirmacion. Estas seguro?</p>
                <button
                    onClick={() => {
                        onDelete()
                        // setState({
                        //     ...state,
                        //     deleted: true
                        // })
                    }}
                >Si, eliminar</button>
                <button
                    onClick={() => {
                        onReset()
                        // setState({
                        //     ...state,
                        //     confirmed: false,
                        //     deleted: false
                        // })
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
                        onReset()
                        // setState({
                        //     ...state,
                        //     confirmed: false,
                        //     deleted: false
                        // })
                    }}
                >Resetear, volver atras</button>
            </React.Fragment>
        )
    }
};

export {UseState};