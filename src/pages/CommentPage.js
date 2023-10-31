import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {Comments} from "../components/CommentsContainer/Comments";

const CommentPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <Comments comments={data}/>
            <hr/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {CommentPage};