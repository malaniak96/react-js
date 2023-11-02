import React, {useEffect} from 'react';


import {useChapter} from "../hooks";
import {Episodes} from "../components/EpisodeContainer";


const EpisodePage = () => {

    const {setChapter} = useChapter();

    useEffect(() => {
        setChapter(null)
    }, [setChapter]);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodePage};