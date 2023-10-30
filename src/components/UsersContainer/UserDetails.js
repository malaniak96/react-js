import React from 'react';
import {useParams} from "react-router-dom";

const UserDetails = ({userDetails}) => {


    const {id, username, email, address: {street, suite, city, zipcode}, phone } = userDetails;
    const {userId} = useParams();

    return (
        <div>
            <div> id: {id}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address: {street} {suite} {city} {zipcode}</div>
            <div> phone: {phone}</div>
            <button>Posts of Current User</button>
        </div>
    );
};

export {UserDetails};