import axios from "axios"
import { BASE_URL } from "./urls";

export const axiosAPI = (contentType = 'application/json') => {
    const headers = {
        'Content-Type': contentType,
        // 'Accesstoken': `Bearer ${token}`,
    };

    return axios.create({ 
        baseURL: BASE_URL,
        headers
     });
}