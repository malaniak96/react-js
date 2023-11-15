import React from 'react';
import {useNavigate} from "react-router-dom";

import {Characters} from "../components/CharactersContainer/Characters";
import css from './Characters.module.css'

const CharactersPage = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button className={css.button} onClick={back}>back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};