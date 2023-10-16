import React from 'react';
import {User} from "./User";

const Users = () => {
    const users = [
        {id:1, name: 'kira', age:15, image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'},
        {id:2, name: 'mila', age:28, image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}

    ]
    return (
        <div className="App">
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );

};

export {Users};