import React from 'react';
import '../styles/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Home} from "../containers/Home";
import {Checkout} from "../containers/Checkout";
import {Payment} from "../containers/Payment";
import {Success} from "../containers/Success";
import {NotFound} from "../containers/NotFound";
import {Layout} from "../components/Layout";
import {Information} from "../containers/Information";
import {AppContext} from '../context/AppContext';
import {useInitialState} from '../hooks/useInitialState';

function App() {
    const initialState = useInitialState();
  return (
      <AppContext.Provider value={initialState}>
          <HashRouter>
              <Layout>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/checkout" element={<Checkout />} />
                      <Route exact path="/checkout/information" element={<Information />} />
                      <Route exact path="/checkout/payment" element={<Payment />} />
                      <Route exact path="/checkout/success" element={<Success />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </Layout>
          </HashRouter>
      </AppContext.Provider>
  );
}

export { App }