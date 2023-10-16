import React from 'react';
import simpsons from "./Simpsons";

const Simpson = ({simpson}) => {

    const {name, age, relation, image} = simpson;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Relation: {relation}</div>
            <img src={image} alt={image}/>
        </div>
    );
};

export {Simpson};