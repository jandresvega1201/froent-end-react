import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function App({saludo, text}) {
//     return (
//         <h1>{saludo}, {text}</h1>
//     )
// }


//HIGTH ORDERS COMPONENTS
// function withSaludo(WrappedComponent) {
//     //El ultimo return de funcion tiene que ser un componente de react los
//     //anteriores a esa funciones pueden ser funciones tradicionales
//     return function WrappedWithSaludo(saludo){
//         return function ComponentTrue(props) {
//             return (
//                 <React.Fragment>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>Estamos acompañando al raper component</p>
//                 </React.Fragment>
//             )
//         }
//     }
// }
//
// const AppWithSaludo = withSaludo(App)("wenas")

root.render(
  <React.StrictMode>
    <App />
    {/*  <AppWithSaludo text="Andres" />*/}
  </React.StrictMode>
);


