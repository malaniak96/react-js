
import {urls} from "../constants/urls";

import {axiosService} from "./axiosService";


const characterService = {
    getByIds: (ids) => axiosService.get(urls.character.byIds(ids))

}


export {
    characterService
}