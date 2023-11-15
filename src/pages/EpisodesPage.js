import React from 'react';
import {useSelector} from "react-redux";

import {Episodes} from "../components/EpisodesContainer/Episodes";

const EpisodesPage = () => {
 const {errors} =  useSelector(state => state.episodes);

    return (
        <div>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};