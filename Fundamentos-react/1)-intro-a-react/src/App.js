import React from 'react';
import './styles/App.css';
import {TodoProvider} from './todoContext';
import {AppUi} from "./components/AppUi";

// const defaultTodos = [
//     {text: 'Aprender React', complete: false},
//     {text: 'Ir a Cine', complete: false},
//     {text: 'Cortar Cebolla', complete: false},
//     {text: 'Leer libro la llorona', complete: false}
// ]
const App = () => {

    // console.log('Render antes del useEffect')
    //
    // React.useEffect(() => {
    //     console.log('use effect')
    // },[])
    // console.log('Render luego del useEffect')

  return (
      <TodoProvider>
          <AppUi />
      </TodoProvider>
  );
};

export default App;
