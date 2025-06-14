import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend1-fou8.onrender.com/api",
  withCredentials: true, // 🔥 Required for cookies to be sent with request
});
