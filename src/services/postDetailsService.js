
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postDetailsService = {
    getAllDetails: (id) => axiosService.get(urls.posts.byUserId(id)),

}

export {
    postDetailsService
};