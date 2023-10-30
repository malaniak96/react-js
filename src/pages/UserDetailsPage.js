import React from 'react';
import {useLoaderData} from "react-router-dom";
import {UserDetails} from "../components/UsersContainer/UserDetails";
import {UsersDetails} from "../components/UsersContainer/UsersDetails";

const UserDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
        <UsersDetails userDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};