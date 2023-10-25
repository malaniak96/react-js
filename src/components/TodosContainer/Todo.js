import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;

    return (
        <div>
            <div> ID: {id}</div>
            <div> TITLE: {title}</div>
            <hr/>
        </div>
    );
};

export {Todo};