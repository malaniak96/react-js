import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {PostDetails} from "./PostDetails";

const Post = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById()
    }, []);


    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {Post};