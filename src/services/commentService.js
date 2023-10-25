import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: ()=> axiosService.get(urls.comments),
    create: (data)=> axiosService.get(urls.comments, data)
}

export {
    commentService
}