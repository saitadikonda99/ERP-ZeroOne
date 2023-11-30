import axios from 'axios'
const base_URL = 'http://localhost:3001'


export const Axios = axios.create({
    baseURL: baseURL,
})

const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials : 'include',
    withCredentials: true,
});

export default axiosPrivate;