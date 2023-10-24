import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../validators/carValidator";

const CarForm = ({setTrigger}) => {

   const {register, reset, handleSubmit, formState: {isValid, errors}} =useForm({
       mode:'all',
       resolver: joiResolver(CarValidator)
   });

   const save = async (car) => {
     await carService.create(car);
     setTrigger(prev => !prev);
   }

   return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}/>
                <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={isValid}>save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};