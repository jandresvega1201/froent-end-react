import React from 'react';
import {NavLink} from "react-router-dom";
import {useAuth} from "./auth/auth";

const routes = [
    { to: '/', text: 'Home', private: false},
    {to: '/blog', text: 'Blog',private: false},
    {to: 'profile', text: 'Profile', private: true },
    {to: 'login', text: 'login', private: false, public: true},
    {to: 'logout', text: 'logout', private: true}
]
const Menu = () => {

    const auth = useAuth()
    return (
        <nav>
            <ul>
                {/*<li>*/}
                {/*    <Link to="/" >Home</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/Blog" >Blog</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to="/profile" >Profile</Link>*/}
                {/*</li>*/}
                {
                    routes.map(route => {
                        if (route.public && auth.user)return null
                        if (route.private && !auth.user) return null;
                        return (
                            <li key={route.to}>
                                <NavLink
                                    to={route.to}
                                    style={({isActive}) => ({color: isActive ? 'red':'blue'})}
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Menu;