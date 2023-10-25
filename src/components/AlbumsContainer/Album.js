import React from 'react';

const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <div> ID: {id}</div>
            <div> TITLE: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};