import * as types from "../types/Tweets";

//Replace action name and update action types
export const getTweetsActionRequest = (payload) => ({
  type: types.GET_TWEETS_REQUEST,
  payload,
});
export const loadTweetsActionRequest = (payload) => ({
  type: types.LOAD_TWEETS_REQUEST,
  payload,
});

export const getTweetsActionReceive = (payload) => ({
  type: types.GET_TWEETS_RECEIVE,
  payload,
});
export const loadTweetsActionReceive = (payload) => ({
  type: types.LOAD_TWEETS_RECEIVE,
  payload,
});
