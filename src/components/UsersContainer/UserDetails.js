import React from 'react';

const UserDetails = ({userDetails}) => {


    const {username, email, address: {street, suite, city, zipcode}, phone } = userDetails;

    return (
        <div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address: {street} {suite} {city} {zipcode}</div>
            <div> phone: {phone}</div>
        </div>
    );
};

export {UserDetails};