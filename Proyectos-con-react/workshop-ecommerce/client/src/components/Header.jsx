import React from 'react';
import '../styles/Header.css';
import {Navbar} from "./Navbar";
import MyOrder from "./MyOrder";

const Header = () => {

    const [state, setState] =React.useState(false);
    return (
        <React.Fragment>
            <header className="header">
                <Navbar state={state} setState={setState}/>
            </header>
            {
                state ? <MyOrder />:null
            }
        </React.Fragment>
    );
};

export default Header;