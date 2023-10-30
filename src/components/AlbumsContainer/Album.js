import React from 'react';

import css from './Albums.module.css';

const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div className={css.Album}>
            <div> ID: {id}</div>
            <div> TITLE: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};