import {createContext} from 'react';
import React from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import {auth} from '../firebase.config';
const authContext = createContext({});
const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);

    const [loading, setLoading] = React.useState(true);
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)

    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    React.useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    return (
        <authContext.Provider value={{signup, login, logout, loading, user, loginWithGoogle, resetPassword}}>
            {children}
        </authContext.Provider>
    )
}

export {
    AuthProvider,
    authContext
}