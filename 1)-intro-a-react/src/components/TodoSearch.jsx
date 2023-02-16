import React from 'react';
import '../styles/TodoSearch.css';
import {TodoContext} from "../todoContext";
const TodoSearch = () => {

    const { input, setInput } = React.useContext(TodoContext);
    const onSearchValueChanged = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input className="TodoSearch"
                   placeholder="Cebolla"
                   value={input}
                   onChange={onSearchValueChanged}
                   // onChange={(e) => onSearchValueChanged(e)}
                   //Cualquiera de las dos formas sirve para capturar los datos de un input
            />
        </div>
    );
};

export {TodoSearch};