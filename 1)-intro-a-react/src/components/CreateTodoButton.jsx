import React from 'react';
import '../styles/CreateTodoItem.css'
const CreateTodoButton = ({setOpenModal, openModal}) => {
    const click = () => {
        setOpenModal(prevState => !prevState)
    }
    return (
        <button className="CreateTodoButton"
                onClick={click}
        >+</button>
    );
};

export {CreateTodoButton};