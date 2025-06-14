import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-backend1-fou8.onrender.com/api" : "/api",
  withCredentials: true,
});
