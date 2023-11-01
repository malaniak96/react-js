import React, {useEffect, useState} from 'react';
import {episodeService} from "../../services/episodeService";
import {useSearchParams} from "react-router-dom";
import {Episode} from "./Episode";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});


    useEffect(() => {
        episodeService.geAll(query.get('page')).then(({data})=> {
            setEpisodes(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <hr/>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>

        </div>
    );
};

export {Episodes};