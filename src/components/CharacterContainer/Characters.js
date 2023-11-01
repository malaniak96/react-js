import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/characterService";
import {Character} from "./Character";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll().then(({data})=> setCharacters(data))
    }, []);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};