// import axios from "axios";

// // const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api";
// const BASE_URL = "http://localhost:4000/api"

// export const axiosInstance = axios.create({
// 	baseURL: BASE_URL,
// 	withCredentials: true,
// });


import axios from "axios";

// ✅ Env se lo, agar nahi mila to fallback localhost use karo
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";


console.log("👉 Axios BASE_URL:", BASE_URL);

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // cookies/session ke liye important
});
