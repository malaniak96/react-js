import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {PostDetails} from "../components/PostContainer/PostDetails";

const PostDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <PostDetails postDetails={data}/>
            <hr/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};