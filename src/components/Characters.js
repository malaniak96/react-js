import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Character} from "./Character";
import {characterService} from "../services/characterService";
import {characterActions} from "../redux/slices/characterSlice";

const Characters = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);

    const page = query.get('page');

    useEffect(() => {
        setQuery({page: '1'})
    }, []);

    useEffect(() => {
        characterService.getAll(page).then(({data}) => dispatch(characterActions.setResponse(data)))
    }, [page]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};