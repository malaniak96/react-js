import {carService} from "../../services";
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit} = useForm();

    const save = async (car) => {
        await carService.create(car)
        // reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};