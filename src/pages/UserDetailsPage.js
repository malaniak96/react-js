import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <UserDetails userDetails={data}/>
            <hr/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};