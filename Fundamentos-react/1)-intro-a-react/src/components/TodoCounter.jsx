import React from 'react';
import '../styles/TodoCounter.css';
import {TodoContext} from "../todoContext";
const TodoCounter = () => {
    const {completeTodos, totalTodos} = React.useContext(TodoContext)
    return (
        <div>
            <h2 className="TodoCounter">{`Has completado ${completeTodos} de ${totalTodos} `}</h2>
        </div>
    );
};

export {TodoCounter};