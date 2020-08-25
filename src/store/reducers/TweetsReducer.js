import * as types from "../types/Tweets";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TWEETS_RECEIVE:
      return [...action.payload];
    default:
      return state;
  }
};
