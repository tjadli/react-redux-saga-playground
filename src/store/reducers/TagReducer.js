import * as types from "../types/Tag";

const INITIAL_STATE = "Trump";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_TAG:
      return action.payload;
    default:
      return state;
  }
};
