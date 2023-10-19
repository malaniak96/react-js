import axios from "axios";
import {baseUrl, imageUrl} from "../constants/urls";

const axiosService = axios.create({baseURL:baseUrl});


export {
    axiosService
}