import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Character} from "./Character";
import {charactersActions} from "../../redux/slices/charactersSlice";
import css from './Characters.module.css';


const Characters = () => {
    const {ids} = useParams();
    const {characters, isLoading} = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(charactersActions.getByIds({ids}))
    }, [ids, dispatch])

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};