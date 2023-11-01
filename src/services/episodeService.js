
import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";

const episodeService = {
    getById: (id)=> axiosService.get(urls.episode.byId(id)),
    geAll: (page='1') => axiosService.get(urls.episode.base, {params:{page}}),
    create: (data) => axiosService.post(urls.episode.base, data)
}


export {
    episodeService
}