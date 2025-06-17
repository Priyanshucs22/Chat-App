import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api" // or your local backend URL
    : "https://chat-app-4ua6.onrender.com/api"; // your actual deployed backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
