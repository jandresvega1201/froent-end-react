import React from 'react';
import {useAuth} from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const {user, logout, loading} = useAuth();
    console.log(user)

    const handleLogout = async () => {
       await logout()
    }
    if (loading){
        return <h1>loading.....</h1>
    }
    return (
        <div>
            <button onClick={handleLogout}>
                logout
            </button>
        </div>
    );
};

export default Home;