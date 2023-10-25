import React from 'react';
import {useLocation} from "react-router-dom";
import {Post} from "../components/PostsContainer/Post";
import {Posts} from "../components/PostsContainer/Posts";

const PostPage = () => {

const {state:userId} = useLocation();

    return (
        <div>
        <Posts userId={userId}/>
        </div>
    );
};

export {PostPage};