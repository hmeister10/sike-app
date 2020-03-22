export const ADD_GAME_DATA = "ADD_GAME_DATA";
export const ADD_USER_DATA = "ADD_USER_DATA";

export function addGameData(payload) {
  return { type: ADD_GAME_DATA, payload };
}

export function addUserData(payload) {
  return { type: ADD_USER_DATA, payload };
}
