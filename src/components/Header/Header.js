import React from 'react';
import css from './Header.module.css'
import {Outlet} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Ricky and Morty</h1>
            <Outlet/>
        </div>
    );
};

export {Header};