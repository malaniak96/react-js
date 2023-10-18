import axios from "axios";
import {baseUrl} from "../constants/Urls";

const axiosService = axios.create({baseURL:baseUrl});




export {
    axiosService
}