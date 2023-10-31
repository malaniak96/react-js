import React from 'react';
import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet, useLoaderData} from "react-router-dom";

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