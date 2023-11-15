import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const episodesService = {
    getAll: (page) => apiService.get(urls.episodes, {params: {page}})
}

export {
    episodesService
}