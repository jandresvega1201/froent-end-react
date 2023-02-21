import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Header from "../components/Header";
import {DetailProduct} from "../pages/DetailProduct";
import {StoreProvider} from "../TodoContext";
import '../styles/App.css';

const App = () => {
    return (
        <HashRouter>
            <StoreProvider>
                <Layout>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail" element={<DetailProduct />} />
                        <Route path="*" element={<h1>Not Found </h1>} />
                    </Routes>
                </Layout>
            </StoreProvider>
        </HashRouter>
    );
};

export default App;