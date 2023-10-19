import React from 'react';
import css from './Launch.module.css';

const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div className={css.Launches}>
            <div>Mission Name: {mission_name}</div>
            <div>Launch Year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};