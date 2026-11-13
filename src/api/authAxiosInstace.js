import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const authAxiosInstance = axios.create({

    baseURL:`${import.meta.env.VITE_BURL}`,

});

authAxiosInstance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]='en';
    const token = useAuthStore.getState().token;
    if(token)
    config.headers["Authorization"]=`Bearer ${token}`;
    
    return config;
})
export default authAxiosInstance;