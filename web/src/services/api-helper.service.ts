import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const httpHelper = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: add request interceptor (for tokens)
httpHelper.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Optional: add response interceptor (for errors)
httpHelper.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response?.data || error.message);
  }
);

export default httpHelper;
