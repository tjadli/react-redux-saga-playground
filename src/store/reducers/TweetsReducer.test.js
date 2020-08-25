import reducer from "./index";
import * as types from "../types/Tweets";

const initialState = {
  selectedTag: "Trump",
  tweets: [],
};

const receivedTweetsState = {
  ...initialState,
  tweets: [
    { id: 1, text: "test" },
    { id: 2, text: "test" },
  ],
};

describe("tweets reducer", () => {
  it("handles received tweets", () => {
    expect(
      reducer(initialState, {
        type: types.GET_TWEETS_RECEIVE,
        payload: [
          { id: 1, text: "test" },
          { id: 2, text: "test" },
        ],
      })
    ).toEqual(receivedTweetsState);
  });
});
