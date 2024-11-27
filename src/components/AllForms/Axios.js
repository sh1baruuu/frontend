import axios from "axios";

// Example of setting up Axios instance with token
const token = localStorage.getItem('token'); // Get your token from localStorage or context

const AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Token ${token}` // Add the token here
    }
});


export default AxiosInstance;