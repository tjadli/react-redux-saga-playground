import * as types from "../types/Tag";
import { TAGS } from "~utils/Constants";

const INITIAL_STATE = TAGS[0].value;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_TAG:
      return action.payload;
    default:
      return state;
  }
};
