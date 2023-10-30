import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import css from "./Post.module.css";

const Post = ({post}) => {

    const {title} = post;
    const {postId} = useParams();
    const navigate = useNavigate();

    return (
        <div className={css.Post}>
            <div> Post Title : {title}</div>
            <button onClick={()=> navigate(`/posts/${postId}`)}>See Post Details</button>
        </div>
    );
};

export {Post};