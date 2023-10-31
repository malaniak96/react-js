import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./Post.module.css";

const Post = ({post}) => {

    const {title, id} = post;

    const navigate = useNavigate();

    return (
        <div className={css.Post}>
            <div> Post Title : {title}</div>
            <button onClick={()=> navigate(`/posts/${id}`)}>See Post Details</button>
        </div>
    );
};

export {Post};