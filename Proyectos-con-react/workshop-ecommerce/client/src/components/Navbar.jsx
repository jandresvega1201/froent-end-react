import React from 'react';
import '../styles/NavBar.css'
import logo from "../img/logo.svg";
import ProfileCart from "./ProfileCart";
import {Link} from "react-router-dom";
import {StoreContext} from "../TodoContext";
import iconMenu from '../img/icon-menu.svg';


const opc = ['Collection', 'Men', 'Women', 'About', 'Contact']

export const Navbar = ({setState, state}) => {

    const {store, dispatch} = React.useContext(StoreContext)
    const {copyProducts} = store

    const handleCart = () => {
        setState(!state)

    }
    const filterCategory = (opc) => {
        const result = copyProducts.filter(item => {
            return item.gender === opc
        })
        if (result.length === 0){
            dispatch({
                type: 'SELECT_CATEGORY',
                payload: copyProducts
            })
        }else {
            dispatch({
                type: 'SELECT_CATEGORY',
                payload: result
            })
        }
    }

    return (
        <nav className="navbar">
            <div className="div-menu-icon">
                <div className="icon-menu-nav">
                    <img className="icon-menu" src={iconMenu} alt="icono menu" />
                </div>
                <div className="container-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <ul className='ul-navbar'>
                    {
                        opc.map(item => (
                            <li className="list-item" key={item}>
                                <span onClick={() => filterCategory(item)}>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ProfileCart handleCart={handleCart}/>
        </nav>
    )
}
