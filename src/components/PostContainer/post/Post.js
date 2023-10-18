import React from 'react';
import css from './Post.module.css';
import {click} from "@testing-library/user-event/dist/click";

const Post = ({post, click}) => {

    const {id, title} = post;


    return (
        <div className={css.Post}>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <button onClick={()=> click(id)}>Post Details</button>
        </div>
    );
};

export {Post};