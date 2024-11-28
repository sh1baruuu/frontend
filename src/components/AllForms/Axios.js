import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://backend-knov.onrender.com/api',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    }
});


AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});



export default AxiosInstance;