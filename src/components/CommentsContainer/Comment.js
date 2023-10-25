import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    const navigate =useNavigate();

    return (
        <div>
            <div> ID: {id}</div>
            <div> NAME: {name}</div>
            <div> EMAIL: {email}</div>
            <div> BODY: {body}</div>
            <button onClick={()=> navigate(`posts/${id}`)}>Get Post</button>
            <hr/>
        </div>
    );
};

export {Comment};