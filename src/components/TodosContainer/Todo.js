import React from 'react';
import css from './Todos.module.css';

const Todo = ({todo}) => {
    const {id, title} = todo;

    return (
        <div className={css.Todos}>
            <div> ID: {id}</div>
            <div> TITLE: {title}</div>
            <hr/>
        </div>
    );
};

export {Todo};