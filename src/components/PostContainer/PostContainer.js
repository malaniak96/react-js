import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Post} from "./Post";
import {useParams} from "react-router-dom";

const PostContainer = () => {

    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        postService.getById(id).then(({data})=>setPost(data))
    }, [id]);


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};