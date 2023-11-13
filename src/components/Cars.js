import {Car} from "./Car";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../slices/carSlice";
import {carService} from "../services/carService";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector( state => state.cars);


    useEffect(() => {
        carService.getAll().then(({data}) =>    dispatch(carActions.getCars(data)))
    }, [dispatch])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};