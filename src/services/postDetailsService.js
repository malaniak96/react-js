
import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";


const postDetailsService = {
    getAllDetails: (postId) => axiosService.get(urls.posts.byUserId(postId)),
    getPostById: (id) => axiosService.get(urls.posts.getPostById(id))

}

export {
    postDetailsService
};