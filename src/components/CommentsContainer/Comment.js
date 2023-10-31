import React from 'react';
import {useParams} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, name, email, body} = comment;

    const {id} = useParams();

    return (
        <div>
            <div> postId: {postId}</div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> email: {email}</div>
            <div> body: {body}</div>
        </div>
    );
};

export {Comment};