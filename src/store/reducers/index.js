import { combineReducers } from "redux";
import tweets from "./TweetsReducer";
import users from "./UsersReducer";
import selectedTag from "./TagReducer";
import tweetsLoading from "./TweetsLoaderReducer";

export default combineReducers({
  tweetsLoading,
  tweets,
  users,
  selectedTag,
});
