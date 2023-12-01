import axios from 'axios'
const base_URL = 'http://localhost:3001'


export const Axios = axios.create({
    baseURL: base_URL,
})

const axiosPrivate = axios.create({
    baseURL: base_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials : 'include',
    withCredentials: true,
});

export default axiosPrivate;