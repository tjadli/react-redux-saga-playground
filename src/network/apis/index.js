import axios from "axios";
import { BASE_URL } from "~utils/Constants";

console.log({ ...process });
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TWITTER_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// TODO: Add request interceptor to add Authorization header
