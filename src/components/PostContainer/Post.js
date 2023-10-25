import React from 'react';
import css from './Post.module.css';
const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Post};