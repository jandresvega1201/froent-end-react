import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = React.createContext({});


function TodoProvider(props) {
    const {item,saveItem,loading, error} = useLocalStorage('TODOS_V1', []);
    const [input, setInput] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completeTodos = item.filter(todo => todo.complete).length;
    const totalTodos = item.length;

    let searchTodos = [];

    if (input.length === 0){
        searchTodos = item
    }else {
        searchTodos = item.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = input.toLowerCase();
            return todoText.includes(searchText)
        })
    }
    const addTodo = (text) => {
        const newTodos = [...item]
        newTodos.push({
            completed: false,
            text,
        })
        saveItem(newTodos)
    }
    const onComplete = (text) => {
        const todoIndex = item.findIndex(todo => todo.text === text);
        const newTodos = [...item]
        newTodos[todoIndex].complete = true;
        saveItem(newTodos)
    }
    const onDelete = (text) => {
        const todoIndex = item.filter(todo => todo.text !== text);
        saveItem(todoIndex)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodos,
            searchTodos,
            input,
            setInput,
            totalTodos,
            openModal,
            setOpenModal,
            addTodo,
            onComplete,
            onDelete
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}