import axios, {AxiosInstance} from "axios";

const API: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const AUTH_API: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

AUTH_API.interceptors.request.use(authInterceptor);

export {API, AUTH_API};
