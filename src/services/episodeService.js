import {urls} from "../constants/urls";

import {axiosService} from "./axiosService";

const episodeService = {
    getAll: (page) => axiosService.get(urls.episode, {params:{page}})
}


export {
    episodeService
}