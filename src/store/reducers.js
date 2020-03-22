import { combineReducers } from "redux";
import { ADD_GAME_DATA, ADD_USER_DATA } from "./actions";

function gameData(state = {}, action) {
  switch (action.type) {
    case ADD_GAME_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

function userData(state = {}, action) {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  gameData,
  userData
});

export default rootReducer;
