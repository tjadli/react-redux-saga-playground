import { call, put } from "redux-saga/effects";
import API from "~apis/TweetsApi";
import { normalize } from "normalizr";
import * as ACTIONS from "../actions/Tweets";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/Tweets";
import { tweetsSchema, usersSchema } from "~utils/Schemas";

export function* tweetsSaga({ payload }) {
  try {
    const response = yield call(API.getTweetsRequest, payload);
    const tweets = normalize(response.data.data, [tweetsSchema]);
    const users = normalize(response.data.includes.users, [usersSchema]);

    yield put(ACTIONS.getTweetsActionReceive({ tweets, users }));
  } catch (err) {
    console.trace(err);
  }
}

export function* loadTweetsSaga({ payload, since }) {
  try {
    const response = yield call(API.getTweetsRequest, payload, since);
    const tweets = normalize(response.data.data, [tweetsSchema]);
    const users = normalize(response.data.includes.users, [usersSchema]);

    yield put(ACTIONS.loadTweetsActionReceive({ tweets, users }));
  } catch (err) {
    console.trace(err);
  }
}

export function* getTweetsSaga() {
  yield takeLatest(TYPES.GET_TWEETS_REQUEST, tweetsSaga);
}
export function* getLoadTweetsSaga() {
  yield takeLatest(TYPES.LOAD_TWEETS_REQUEST, loadTweetsSaga);
}
