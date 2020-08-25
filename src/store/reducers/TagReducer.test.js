import reducer from "./index";
import * as types from "../types/Tag";

const initialState = {
  selectedTag: "Trump",
  tweets: [],
};

describe("tag reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("handles set tag", () => {
    expect(
      reducer(initialState, {
        type: types.SET_SELECTED_TAG,
        payload: "testTag",
      })
    ).toEqual({
      ...initialState,
      selectedTag: "testTag",
    });
  });
});
