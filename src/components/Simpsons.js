import React, {useEffect, useState} from 'react';
import {Simpson} from "./Simpson";

const Simpsons = () => {

    const [simpsons, setSimpsons] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character?limit=6')
            .then(value => value.json())
            .then(character => setSimpsons(character))
    }, []);


    return (
        <div>
            {simpsons.map(value => <Simpson key={value.id} simpson={value}/>)}
        </div>
    );
};

export {Simpsons};