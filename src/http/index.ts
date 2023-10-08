import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Endpoints
export const sendOtp = (data: { phone: string }) =>
  api.post("/api/v1/auth/send-otp", data);
export const verifyOtp = (data: { phone: string; otp: string; hash: string }) =>
  api.post("/api/v1/auth/verify-otp", data);
export const logout = () => api.post("/api/v1/auth/logout");
export const activateUser = (data: { name: string; avatar: string }) =>
  api.post("/api/v1/auth/activate-user", data);

// Interceptors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/refresh`,
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);

export default api;
