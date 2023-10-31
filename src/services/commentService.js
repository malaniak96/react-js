import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const commentService = {
    getComments: (id) => axiosService.get(urls.comments.getComments(id))
}


export {
    commentService
}