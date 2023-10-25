import {axiosService} from "./axiosService";
import {urls} from "../constarts/urls";

const postService ={
    getByUserId: (userId) => axiosService.get(urls.posts.byUserId(userId))
}

export {
    postService
}