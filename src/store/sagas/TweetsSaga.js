import { call, put } from "redux-saga/effects";
import API from "~apis/TweetsApi";
import * as ACTIONS from "../actions/Tweets";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/Tweets";

export function* tweetsSaga({ payload }) {
  try {
    const response = yield call(API.getTweetsRequest, payload);

    yield put(ACTIONS.getTweetsActionReceive(response.data));
  } catch (err) {
    // TODO : add error handling
    console.trace(err);
  }
}

export function* getTweetsSaga() {
  yield takeLatest(TYPES.GET_TWEETS_REQUEST, tweetsSaga);
}
