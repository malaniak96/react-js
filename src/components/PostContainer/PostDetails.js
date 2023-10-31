import {useParams} from "react-router-dom";
import React from "react";

import css from "./Post.module.css";

const PostDetails = ({postDetails}) => {

    const {title, body } = postDetails;
    const {id} = useParams();


    return (
        <div className={css.Post}>
            <h1>Post Details</h1>
            <hr/>
            <hr/>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <div> body: {body}</div>
            <hr/>
            <hr/>
            <h1> Post Comments</h1>
        </div>
    );
};

export {PostDetails};