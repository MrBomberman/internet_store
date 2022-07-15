import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

$authHost.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config;
}); // во время запроса токен будет автоматически подставляться из localstorage

export {
    $host,
    $authHost
}