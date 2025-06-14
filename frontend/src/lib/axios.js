import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend1-fou8.onrender.com",
  withCredentials: true,
});
