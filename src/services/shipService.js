import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const shipService = {
    getAll: () =>  axiosService.get(urls.ships.base),
}


export {
    shipService
}