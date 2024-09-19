import axios from 'axios';
import { toast } from 'react-toastify';


const isTokenExpired = (token) => {

    if (!token) return true;
    const jwtPayload = JSON.parse(atob(token.split('.')[1]));

    const expiryTime = jwtPayload.exp * 1000;
    const currentTime = new Date().getTime();

    return expiryTime < currentTime;
};

const apiUrl = process.env.REACT_APP_API_URL;

// Axios init
const api = axios.create({
    baseURL: apiUrl, // env.'den alıyoruz.
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
});

// Request interceptor: Her istekte çalışır
api.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            if (isTokenExpired(token)) {
                toast.info('Oturum süreniz doldu, lütfen tekrar giriş yapın.');
                localStorage.removeItem('token');
                window.location.href = '/SignIn';
                return Promise.reject('Token expired');
            }

            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor: Yanıtlarda çalışır
api.interceptors.response.use(
    (response) => {
        // Başarılı yanıtları döndür  
        return response;
    },
    (error) => {
        // Yetkisiz (401) hatası varsa yönlendir
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = '/SignIn';
            toast.info('Oturum süreniz doldu, lütfen tekrar giriş yapın.');
        }
        return Promise.reject(error);
    }
);

export default api;
