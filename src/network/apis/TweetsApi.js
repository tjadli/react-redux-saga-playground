import { axiosInstance } from "./index";

const getTweetsRequest = async (query) => {
  return await axiosInstance.get(
    `tweets/search/recent?query=${query}&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,public_metrics,source,text&user.fields=name,username,profile_image_url&expansions=author_id`
  );
};

export default {
  getTweetsRequest,
};
