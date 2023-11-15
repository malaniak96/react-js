import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {episodesActions} from "../../redux/slices/episodesSlice";
import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        dispatch(episodesActions.setChapter(chapter))
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
}

export {Episode};