import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-4ua6.onrender.com/api" : "/api",
  withCredentials: true,
});
