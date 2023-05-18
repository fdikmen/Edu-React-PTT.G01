import axios from 'axios';

var baseURL = 'https://6465e7389c09d77a62f73f10.mockapi.io';

const axiosInstance = axios.create({
    baseURL: baseURL
});


export default axiosInstance;
