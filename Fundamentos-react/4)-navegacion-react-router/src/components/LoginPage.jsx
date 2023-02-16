import React from 'react';
import {useAuth} from "./auth/auth";
import {Navigate} from "react-router-dom";

const LoginPage = () => {

    const [userName, setUserName] = React.useState('');
    const auth = useAuth()

    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    const login = (e) => {
        e.preventDefault();
        auth.login({userName})
    }
    if (auth.user){
        return <Navigate to="/profile"/>
    }

    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario</label>
                <input
                    value={userName}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginPage;