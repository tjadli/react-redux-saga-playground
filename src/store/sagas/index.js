import { getTweetsSaga } from './TweetsSaga';
import { all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([getTweetsSaga()]);
}
