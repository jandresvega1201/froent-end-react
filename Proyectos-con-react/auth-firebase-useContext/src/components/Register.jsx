import React from 'react';
import {useAuth} from '../hooks/useAuth';
import {useNavigate} from "react-router-dom";
const Register = () => {

    const navigate = useNavigate();

    const [error, setError] = React.useState();

    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const {signup} = useAuth()


    const handleChange = ({target: {name, value}}) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(user.email, user.password);
            navigate('/')

        }catch (e) {
            setError(e.message)
        }
    }

    return (
        <div>
            {
                error && <p> {error} </p>
            }
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="andre2@gmail.com"
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    onChange={handleChange}
                />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;