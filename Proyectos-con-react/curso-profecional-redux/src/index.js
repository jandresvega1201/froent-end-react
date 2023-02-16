import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import {pokemonsReducers} from './redux/reducers/pokemons';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import {logger, featuring} from './middlewares';
import thunk from 'redux-thunk';
// const composedEnhaser = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(logger, featuring))

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose

const composedEnhaser = composeAlt(applyMiddleware(thunk, logger))
// const store = createStore(pokemonsReducers, composedEnhaser);
const store = createStore(pokemonsReducers, composeWithDevTools(applyMiddleware(thunk)));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

