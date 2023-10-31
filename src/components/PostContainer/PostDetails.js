import {useNavigate, useParams} from "react-router-dom";
import React from "react";

import css from "./Post.module.css";

const PostDetails = ({postDetails}) => {

    const {title, body } = postDetails;
    const {id} = useParams();

    const navigate = useNavigate();

    return (
        <div className={css.Post}>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <div> body: {body}</div>
            <button onClick={()=> navigate(`/posts/${id}/comments`)}>Comments of Current Post</button>
        </div>
    );
};

export {PostDetails};