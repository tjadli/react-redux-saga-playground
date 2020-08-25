import { combineReducers } from "redux";
import tweets from "./TweetsReducer";
import selectedTag from "./TagReducer";

export default combineReducers({
  tweets,
  selectedTag,
});
