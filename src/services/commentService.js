import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const commentService = {
   getAllComments: (id) => axiosService.get(urls.comments.byId(id))
}


export {
    commentService
}