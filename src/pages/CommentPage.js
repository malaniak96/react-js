import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Comments} from "../components/CommentsContainer/Comments";

const CommentPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <Comments comments={data}/>

        </div>
    );
};

export {CommentPage};