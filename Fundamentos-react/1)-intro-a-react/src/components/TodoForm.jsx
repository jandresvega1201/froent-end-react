import React from 'react';
import '../styles/TodoForm.css'
import {TodoContext} from "../todoContext";

const TodoForm = () => {

    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [value, setValue] = React.useState('')
    const onCancele = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        addTodo(value);
        setOpenModal(false)
    }

    return (
        <form onSubmit={onAdd}>
            <label></label>
            <textarea onChange={onChange} value={value} placeholder="Cortar la cebolla"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancele}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit" >Añadir</button>
            </div>

        </form>
    );
};

export {TodoForm};