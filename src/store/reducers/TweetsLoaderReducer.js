import * as types from "../types/Tweets";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TWEETS_REQUEST:
      return true;

    case types.GET_TWEETS_RECEIVE:
      return false;

    default:
      return state;
  }
};
