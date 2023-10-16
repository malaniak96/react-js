import React, {useEffect} from 'react';
import {useState} from 'react';
import UserComponent from "../user/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/use')
            .then(value => value.json())
            .then(value => {

                setUsers(value);

            });
    }, []);
    return (
        <div>
            {
                users.map(value => (<UserComponent item={value} key={value.id}/>))
            }
        </div>
    );
};

export default UsersComponent;