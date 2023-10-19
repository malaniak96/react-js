import React, {useEffect, useState} from 'react';
import {Launch} from "../Ship/Launch";
import css from './Launches.module.css'


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => {
            const filtered = value.filter(value => value.launch_year !== '2020');
            setLaunches(filtered);
        })
    }, []);


    return (
        <div className={css.Launches}>
               {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};