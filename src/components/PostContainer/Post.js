import React from 'react';
import {useParams} from "react-router-dom";

const Post = ({post}) => {

    const {title} = post;
    const {userId} = useParams();

    return (
        <div>
            <div> Post Title : {title}</div>
            <button>See Post Details</button>
        </div>
    );
};

export {Post};