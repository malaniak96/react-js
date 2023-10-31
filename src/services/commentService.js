import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const commentService = {
   getAllComments: (id) => axiosService.get(urls.comments.byId(id)),
    getComments: () =>axiosService.get(urls.comments.comments)
}


export {
    commentService
}