import {axiosService} from "./axiosService";
import {urls} from "../constarts/urls";

const userService = {
    getAll: () => axiosService.get(urls.users),

}

export {
    userService
}