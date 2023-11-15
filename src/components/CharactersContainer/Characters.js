import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../redux/slices/charactersSlice";


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
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};