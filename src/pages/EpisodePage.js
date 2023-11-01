import React, {createContext, useState} from 'react';
import {Episodes} from "../components/EpisodeContainer/Episodes";
import {Outlet} from "react-router-dom";

const Context = createContext(null);
const EpisodePage = () => {
    const [episodeId, setEpisodeId] = useState(null);
    return (
        <div>
            <Context.Provider value={{setEpisodeId}}>
                <Episodes/>
            </Context.Provider>
            <Outlet context={{episodeId}}/>
        </div>
    );
};

export {EpisodePage};