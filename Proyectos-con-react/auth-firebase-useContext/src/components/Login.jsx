import React from 'react';
import {useAuth} from '../hooks/useAuth';
import {useNavigate} from "react-router-dom";
import Alert from "./Alert";
const Login = () => {

    const navigate = useNavigate();

    const [error, setError] = React.useState();

    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const {login, loginWithGoogle, resetPassword} = useAuth()


    const handleChange = ({target: {name, value}}) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate('/')

        }catch (e) {
            setError(e.message)
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
            navigate('/')
        }catch (e) {
            console.error(e)
        }
    }
    const handleResetPassword = async() => {
        if (!user.email)return setError("pro favor ingrese su email");
        try {
            await resetPassword(user.email);
            console.log(resetPassword)
            setError("Le hemos enviado un correo a su cuenta")
        }catch (e) {
            setError(e.message)
        }

    }

    return (
        <div className="w-full max-w-xs m-auto">
            {
                error && <Alert message={error} />
            }
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-fold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="andre2@gmail.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-fold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        onChange={handleChange}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none text-sm focus:shadow-outline">Login</button>
                <span onClick={handleResetPassword}>Olvidaste tu contraseña</span>
            </form>
            <button className="bg-slate-50 hover:bg-slate-200 w-full text-black border-2 rounded py-2 px-4 border-gray-300" onClick={handleGoogleLogin}>Login con Google</button>
        </div>
    );
};

export default Login;