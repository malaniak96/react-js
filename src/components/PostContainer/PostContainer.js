import React, {useEffect, useState} from 'react';
import {PostForm} from "./PostForm";
import {Post} from "./Post";
import {Posts} from "./Posts";
import {postService} from "../../services/postService";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};