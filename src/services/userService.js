import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: ()=> axiosService.get(urls.users),
    create: (data)=> axiosService.post(urls.users, data)
    //to add user = post
}

export {
    userService
}