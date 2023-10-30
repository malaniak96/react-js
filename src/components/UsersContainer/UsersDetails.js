import React from 'react';
import {User} from "./User";
import {useParams} from "react-router-dom";

const UsersDetails = ({usersDetails}) => {

    const {userId} = useParams();

    return (
        <div>
            {usersDetails.map(userDetails => <User key={userDetails.id} userDetails={userDetails}/>)}
        </div>
    );
};

export {UsersDetails};