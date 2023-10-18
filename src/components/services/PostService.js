import {axiosService} from "./axiosService";
import {urls} from "../constants/Urls";


const postService = {
    getAllPosts: ()=> axiosService.get(urls.posts.base),
    getById: (id) => axiosService.get(urls.posts.byId(id))
}

export {
    postService
}