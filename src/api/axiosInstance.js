import axios from "axios";
const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_BURL}`,
    
});
axiosInstance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]='en'; 
    return config;
})
export default axiosInstance;