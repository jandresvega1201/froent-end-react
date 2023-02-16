import React from 'react';
import './styles/App.css';
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {useTodos} from './hooks/useTodos';
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {Modal} from './modal';
import {TodoForm} from "./components/TodoForm";
import {TodoHeader} from "./components/TodoHeader";
import {TodosError} from "./validadores/TodosError";
import {TodosLoading} from "./validadores/TodosLoading";
import {EmptyTodos} from "./validadores/EmptyTodos";
import {changeAlertStorageListener} from "./components/ChangeAlert";

//RENDER PROPS:
/*
Se refiere a un patron o tecica para compartir codigo
entre componentes utilizando una propiedad cuyo valor es una funcion EJEMPLO
<TodoList render={data => (
   <h1>Hello {data.target}</h1>
)}/>
*/
const App = () => {
    const {
        loading,
        error,
        searchTodos,
        onDelete,
        onComplete,
        openModal,
        setOpenModal,
        completeTodos,
        totalTodos,
        input,
        setInput,
        addTodo,
        sincronized
    } = useTodos();
    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completeTodos={completeTodos}
                    // loading={loading}
                />
                <TodoSearch
                    setInput={setInput}
                    input={input}
                    // loading={loading}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchTodos={searchTodos}
                onError={() => <TodosError /> }
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                setValue={input}
                onEmptySearchResukts={(searchText) => <p>No ahi ningun resultado {searchText}</p>}
                render={todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => onComplete(todo.text)}
                        onDelete={() => onDelete(todo.text)}
                    />
                )}
            >
                {/*RENDER FUNCION*/}
                {/*{*/}
                {/*    (todo) => (*/}
                {/*        <TodoItem*/}
                {/*            key={todo.text}*/}
                {/*            text={todo.text}*/}
                {/*            completed={todo.completed}*/}
                {/*            onComplete={() => onComplete(todo.text)}*/}
                {/*            onDelete={() => onDelete(todo.text)}*/}
                {/*        />*/}
                {/*    )*/}
                {/*}*/}
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
                    </Modal>
                )
            }
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <changeAlertStorageListener sincronized={sincronized} />
        </React.Fragment>
    );
};

export default App;
