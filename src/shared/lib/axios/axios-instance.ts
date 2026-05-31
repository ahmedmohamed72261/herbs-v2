import axios from "axios";
import { setupInterceptors } from "./interceptors";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.botanicalexport.com/v1";

const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

setupInterceptors(axiosInstance);

export { axiosInstance };
