import React from 'react';
import {useAuth, AuthRoute} from "./auth/auth";


const ProfilePage = () => {
    const auth = useAuth();

    return (
        <>
            <h1>Perfil</h1>
            <p>Welcome, {auth.user.userName}</p>
        </>
    );
};

export default ProfilePage;