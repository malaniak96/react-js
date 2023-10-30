import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/postService";
import {Post} from "./Post";


const PostContainer = () => {

    const [post, setPost] = useState(null);
    //or -> const {state: {postId}} = useLocation();

    const {id} = useParams();

    useEffect(() => {
        postService.getById(id).then(({data})=>setPost(data))
    }, [id]);

    // useEffect(() => {
    //         postService.getById(postId).then(({data})=>setPost(data))
    //     }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};