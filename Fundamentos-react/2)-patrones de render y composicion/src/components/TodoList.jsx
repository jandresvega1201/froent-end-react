import React from 'react';
import '../styles/TodoList.css';

const TodoList = ({
                      error,
                      onError,
                      loading,
                      onLoading,
                      searchTodos,
                      onEmptyTodos,
                      render,
                      children,
                      totalTodos,
                      setValue,
                      onEmptySearchResukts
}) => {
    const renderFunc = children || render
    return (
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !totalTodos) && onEmptyTodos()}
            {(!!totalTodos && !searchTodos.length) && onEmptySearchResukts(setValue)}
            {
                searchTodos.map((todo) => renderFunc(todo))
            }
            <ul>
                {children}
            </ul>
        </section>
    );
};

export {TodoList};