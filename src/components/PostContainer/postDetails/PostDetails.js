import React from 'react';

const PostDetails = ({postsDetails}) => {

    const {userId, id, title, body} = postsDetails;
    return (
        <div>
            <div> userId: {userId}</div>
            <div> id: {id}</div>
            <div> Title: {title}</div>
            <div> Post: {body}</div>
        </div>
    );
};

export {PostDetails};