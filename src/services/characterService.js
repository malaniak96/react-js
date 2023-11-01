
import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";


const characterService = {
    getAll: ()=> axiosService.get(urls.character),
    getById: (id) => axiosService.get(urls.character)
}


export {
    characterService
}