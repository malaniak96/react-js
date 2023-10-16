import React from 'react';

const User = ({item}) => {
    let  {name, age, image} = item;
    return (
        <div>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <img src={image} alt={name}/>
        </div>
    );
};
//шаблон for app.js
export  {User};