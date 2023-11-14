import {Car} from "./Car";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../slices/carSlice";
import {carService} from "../services/carService";

const Cars = () => {
    const {cars, trigger} = useSelector( state => state.cars);// cars from store redux

    const dispatch = useDispatch();//hook

    useEffect(() => {
        carService.getAll().then(({data}) =>  dispatch(carActions.setResponse(data)))
    }, [trigger, dispatch])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};