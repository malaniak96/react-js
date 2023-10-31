import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
   getAllComments: () => axiosService.get(urls.comments)
}


export {
    commentService
}