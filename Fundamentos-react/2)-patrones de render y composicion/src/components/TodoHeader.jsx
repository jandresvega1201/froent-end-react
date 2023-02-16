import React from 'react';
const TodoHeader = ({children, loading}) => {

    React.cloneElement(children, {loading: true})
    return (
        <header>
            {/*{React.cloneElement(children, {loading: loading})} /!*cloneElemnt clona solamente 1 hijo *!/*/}
            {
                React.Children
                    .toArray(children)
                    .map(children => React
                        .cloneElement(children, {loading: loading}))}{/*Children nos devuelve un array de hijos*/
        }


        </header>
    );
};

export { TodoHeader };
