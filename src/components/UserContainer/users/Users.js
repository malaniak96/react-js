import React, {useEffect, useState} from 'react';
import axios from "axios";

import css from './Users.module.css'
import {User} from "../user/User";
import {axiosService} from "../../../service/axiosService";
import {userService} from "../../../service/userService";
import UserDetails from "../userDetails/UserDetails";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const click = async (userId) => {
       const {data} = await userService.getById(userId);
       setUserDetails(data);
    }

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
      // axiosService.get('/users').then(({data}) => setUsers(data))
        userService.getAll().then(({data}) => setUsers(data))

    }, []);


    return (
        <div>
            <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user} click={click}/>)}
            </div>
            {
                userDetails && <UserDetails userDetails={userDetails}/>
            }
        </div>
    );
};

export {Users};
