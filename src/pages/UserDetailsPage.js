import React from 'react';
import {useLoaderData} from "react-router-dom";

import {UsersDetails} from "../components/UsersContainer/UsersDetails";

const UserDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
        <UsersDetails usersDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};