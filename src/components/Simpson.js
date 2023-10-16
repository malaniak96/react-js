//шаблон

import React from 'react';

const Simpson = ({simpson}) => {

    const {name, status, species, gender, image} = simpson;

    return (
        <div>
        <div>{name}</div>
        <div>STATUS: {status}</div>
        <div>SPECIES: {species}</div>
        <div>GENDER: {gender}</div>
        <img src={image} alt={image}/>
        </div>
    );
};

export {Simpson};