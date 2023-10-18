import React, {useEffect, useState} from 'react';
import css from './Posts.module.css'


import axios, {post} from "axios";
import {axiosService} from "../../services/axiosService";
import {Post} from "../post/Post";
import {postService} from "../../services/PostService";
import {PostDetails} from "../postDetails/PostDetails";

const Posts = () => {

   const [posts, setPosts] = useState([]);



    useEffect(() => {
      //  axiosService.get('/posts').then(({data}) => setPosts(data))
        postService.getAllPosts().then(({data}) => setPosts(data))
    }, []);



    return (
        <div>
             <div className={css.Posts}>
                {posts.map(post => <Post key={post.id} post={post} />)}

            </div>

        </div>
    );
};

export {Posts};


