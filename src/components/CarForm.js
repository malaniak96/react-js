
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../slices/carSlice";

const CarForm = () => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    const trigger = () => {
        dispatch(prev => !prev)
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await dispatch(carActions.create(car))
        trigger()
        reset()

    }

    const update = async (car) => {
        await dispatch(carActions.update(carForUpdate.id, car ))
        trigger()
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
        </div>
    );
};

export {CarForm};