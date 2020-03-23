import { httpClient } from "./httpClient";

export const createGame = async name => {
  //TODO: Env variable here.
  const result = await httpClient.post("http://sike-api.herokuapp.com/game");

  return result;
};
