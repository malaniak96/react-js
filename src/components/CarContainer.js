import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        carService.getAll().then(({data})=> setCars(data));
    }, [trigger]);
    
    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarContainer};