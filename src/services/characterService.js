import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const characterService = {
    getAll: (page) => axiosService.get(urls.characters, {params: {page}})
}

export {
    characterService
}