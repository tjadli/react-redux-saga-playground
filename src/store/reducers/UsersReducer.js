import * as types from "../types/Tweets";
import produce from "immer";

const INITIAL_STATE = {
  entities: {
    byId: {},
  },
  allIds: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TWEETS_RECEIVE:
      return produce(state, (draftState) => {
        draftState.entities.byId = action.payload.users.entities.byId;
        draftState.allIds = action.payload.users.result;
      });
    case types.LOAD_TWEETS_RECEIVE:
      return produce(state, (draftState) => {
        draftState.entities.byId = {
          ...state.entities.byId,
          ...action.payload.users.entities.byId,
        };
        draftState.allIds = [...action.payload.users.result, ...state.allIds];
      });

    default:
      return state;
  }
};
