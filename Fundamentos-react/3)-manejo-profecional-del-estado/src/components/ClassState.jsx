import React from 'react';
import {Loading} from "./Loading";

const SECURITY_CODE = ''
class ClassState extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            loading: false
        }
    }

    componentDidUpdate() {
        if (!!this.state.loading){
            setTimeout(() => {
                console.log("haciendo validacion")

                if (SECURITY_CODE === this.state.value){
                    this.setState({error: false,loading: false})
                }else {
                    this.setState({error: true, loading: false})
                }
                this.setState({loading: false})
                console.log("terminando validacion")
            }, 3000);
        }
    }

    render(){
        const {value} = this.state
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad</p>
                {
                    (this.state.error && !this.state.loading) && (
                        <p>Error el codigo es incorrecto</p>
                    )
                }
                {
                    this.state.loading && (
                        <Loading />
                    )
                }
                <input
                    placeholder="Codigo de seguridad"
                    type="text"
                    value={value}
                    onChange={(e) =>{
                        this.setState({value: e.target.value})
                    } }
                />
                <button
                    onClick={() => this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }