import React from 'react';
import '../styles/Layout.scss';
import {Header} from "./Header";
import {Footer} from "./Footer";

function Layout ({children}) {
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };