import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {Character} from "./Character";
import {characterService} from "../../services";

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const {ids} = useParams();

    useEffect(() => {
        characterService.getByIds(ids).then(({data})=> setCharacters(data))
    }, [ids]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};