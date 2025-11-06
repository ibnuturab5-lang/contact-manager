import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VITE_REACT_BACKEND_URL || "https://foul-cobweb-5g796v74rq4627q7j-8080.app.github.dev",
  withCredentials: true,
});
axiosInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
},
(error)=>{
    return Promise.reject(error);
});
export default axiosInstance
