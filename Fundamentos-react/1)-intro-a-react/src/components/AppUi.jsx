import React from 'react';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoContext} from '../todoContext';
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {Modal} from '../modal';
import {TodoForm} from "./TodoForm";
const AppUi = () => {
    const {
        loading,
        error,
        searchTodos,
        onDelete,
        onComplete,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <p>Estamos cargando....</p>}
                {error && <p>Hubo un error....</p>}
                {(!loading && !searchTodos.length) && <p> Crea tu primer TODO </p>}
                {
                    searchTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.complete}
                            onCompleted={() => onComplete(todo.text)}
                            onDelete={() => onDelete(todo.text)}
                        />
                    ))
                }
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
};

export {AppUi};