import { axiosInstance } from "./index";

const getTweetsRequest = async (query) => {
  return await axiosInstance.get(`tweets?q=${query}`);
};

export default {
  getTweetsRequest,
};
