import { axiosInstance } from "./index";

const getTweetsRequest = async (query, since) => {
  let queryStr = `query=${query}&tweet.fields=author_id,created_at,id,public_metrics,source,text&user.fields=name,username,profile_image_url&expansions=author_id`;
  if (since) {
    queryStr += `&since_id=${since}`;
  }
  return await axiosInstance.get(`tweets/search/recent?${queryStr}`);
};

export default {
  getTweetsRequest,
};
