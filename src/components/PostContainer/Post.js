import React from 'react';
import css from './Post.module.css';
const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div className={css.Post}>
            <div> ID: {id}</div>
            <div> TITLE: {title}</div>
            <div> BODY: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};