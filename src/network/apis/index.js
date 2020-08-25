import axios from "axios";
import { BASE_URL } from "~utils/Constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Add request interceptor to add Authorization header
