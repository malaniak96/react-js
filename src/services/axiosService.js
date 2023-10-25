import axios from "axios";
import {baseURL} from "../constarts/urls";


const axiosService = axios.create({baseURL});


export {
    axiosService
}
