import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {episodesActions} from "../../redux/slices/episodesSlice";
import {Episode} from "./Episode";
import css from './Episodes.module.css';

const Episodes = () => {

    const {episodes, isLoading, info: {prev, next}} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {

        dispatch(episodesActions.getAll({page}))
        // episodeService.getAll(page)
        //     .then(({data: {info: {prev, next}, results}}) => setEpisodesRes({prev, next, results}))
    }, [page, dispatch])


    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!prev} onClick={prevHandler}>prev</button>
                <button disabled={!next} onClick={nextHandler}>next</button>
            </div>
        </div>
    );
};

export {Episodes};