import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../slices/carSlice";
import {carService} from "../services/carService";


const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.trigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};