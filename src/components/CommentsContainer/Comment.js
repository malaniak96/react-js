import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Comments.module.css';

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div className={css.Comments} >
            <div> ID: {id}</div>
            <div> POST-ID: {postId}</div>
            <div> NAME: {name}</div>
            <div> EMAIL: {email}</div>
            <div> BODY: {body}</div>
            <button className={css.btn} onClick={()=> navigate(`posts/${id}`)}>Get Post</button>
            <hr/>
        </div>
    );
};

export {Comment};

// or ->  <button className={css.btn} onClick={()=> navigate(`posts`, {state: {postId}})}>Get Post</button>