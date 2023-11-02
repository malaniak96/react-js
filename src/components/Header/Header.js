import React from 'react';

import css from './Header.module.css'
import {useChapter} from "../../hooks";

const Header = () => {

   const {chapter} = useChapter();

    return (
        <div className={css.Header}>
            {
                chapter ?
                    <h1>{chapter}</h1>
                    :
                    <h1>Rick & Morty Episodes</h1>
            }
        </div>
    );
};

export {Header};