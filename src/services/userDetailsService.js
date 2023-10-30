import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userDetailsService = {
    getDetails: (userId) => axiosService.get(urls.users.getDetailsByUserId(userId)),

}

export {
    userDetailsService
}