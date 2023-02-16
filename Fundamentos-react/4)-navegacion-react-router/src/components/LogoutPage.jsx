import React from 'react';
import {useAuth} from "./auth/auth";

const LogoutPage = () => {
    const auth = useAuth()
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return (
        <>
            <h1>Logout page</h1>
            <form onSubmit={logout}>
                <label>Se guro que quieres salir</label>
                <button type="submit">Salir</button>
            </form>
        </>
    );
};

export default LogoutPage;