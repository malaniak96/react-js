import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const charactersService = {
    getByIds: (ids) => apiService.get(urls.characters(ids))
}

export {
    charactersService
}