import React from 'react';

const Episode = ({episode}) => {

    const {id, name, chapter} = episode;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
            <button>See characters</button>
        </div>
    );
};

export {Episode};