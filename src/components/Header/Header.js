import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {

    const {chapter} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            {chapter ? chapter : 'The Rick and Morty'}
        </div>
    );
};

export {Header};