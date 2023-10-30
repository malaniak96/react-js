import React from 'react';
import {User} from "./User";
import {useParams} from "react-router-dom";
import {UserDetails} from "./UserDetails";

const UsersDetails = ({usersDetails}) => {

    const {userId} = useParams();

    return (
        <div>
            {usersDetails.map(userDetails => <UserDetails key={userDetails.id} userDetails={userDetails}/>)}
        </div>
    );
};

export {UsersDetails};