import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {post} from "axios";

const postService = {
    getAll: ()=> axiosService.get(urls.posts),
    create: (post) => axiosService.post(urls.posts, post)
}

export {
    postService
}