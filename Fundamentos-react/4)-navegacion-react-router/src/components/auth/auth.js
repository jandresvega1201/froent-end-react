import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
const listAdmin = ["andres", "admin1", "admin2"];
const AuthContext = React.createContext()

function AuthProvider({children}) {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
    const login = ({userName}) => {
        const isAdmin = listAdmin.find(admin => admin === userName)
        setUser({userName, isAdmin})
        navigate('/profile')
    }
    const logout = () => {
        setUser(null)
        navigate('/')
    }
    const auth = {user, login, logout}
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function AuthRoute({children}) {
    const auth =useAuth();
    if (!auth.user){
        return <Navigate to="/login" />
    }
    return children
}

function useAuth() {
    return React.useContext(AuthContext)
}

export {AuthProvider, useAuth,AuthRoute}