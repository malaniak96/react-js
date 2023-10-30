import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {post} from "axios";

const UserDetails = ({userDetails}) => {


    const {id, username, email, address: {street, suite, city, zipcode}, phone } = userDetails;
    const {userId} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div> id: {id}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address: {street} {suite}, {city} {zipcode}</div>
            <div> phone: {phone}</div>
            <button onClick={()=> navigate(`/users/${userId}/posts`)}>Posts of Current User</button>
        </div>
    );
};

export {UserDetails};