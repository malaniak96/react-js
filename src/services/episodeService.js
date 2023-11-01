
import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";

const episodeService = {
    geAll: (page='1') => axiosService.get(urls.episode.base, {params:{page}}),
    create: (data) => axiosService.post(urls.episode.base, data)
}


export {
    episodeService
}