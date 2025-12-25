import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 10000,
});

export default axiosInstance;
