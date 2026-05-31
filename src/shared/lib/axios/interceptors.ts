import type { AxiosInstance } from "axios";

export function setupInterceptors(instance: AxiosInstance): void {
  instance.interceptors.request.use(
    (config) => {
      config.headers["Accept"] = "application/json";
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.warn("Authentication required. Please check your API credentials.");
      }
      if (error.response?.status === 429) {
        console.warn("Rate limit exceeded. Please try again later.");
      }
      return Promise.reject(error);
    }
  );
}
