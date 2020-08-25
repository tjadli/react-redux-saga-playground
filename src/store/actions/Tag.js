import * as types from "../types/Tag";

export const setSelectedTag = (payload) => ({
  type: types.SET_SELECTED_TAG,
  payload,
});
