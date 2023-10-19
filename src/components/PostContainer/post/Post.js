import React, {useState} from 'react';
import css from './Post.module.css';
import {click} from "@testing-library/user-event/dist/click";
import {postService} from "../../services/PostService";
import {PostDetails} from "../postDetails/PostDetails";


const Post = ({post}) => {

    const {id, title} = post;
    const [postsDetails, setPostsDetails] = useState(null);

    const click =async (userId)=> {
        const {data} = await postService.getById(userId);
        setPostsDetails(data);
        console.log(data);
    }

    return (
        <div className={css.Post}>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <button onClick={()=> click(id)}>Post Details</button>
            {postsDetails && <PostDetails postsDetails={postsDetails}/>}
        </div>
    );
}:

export {Post};