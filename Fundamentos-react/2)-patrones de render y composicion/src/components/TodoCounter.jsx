import React from 'react';
import '../styles/TodoCounter.css';
const TodoCounter = ({totalTodos, completeTodos, loading}) => {

    return (
        <div>
            <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
                {`Has completado ${completeTodos} de ${totalTodos} `}
            </h2>
        </div>
    );
};

export {TodoCounter};