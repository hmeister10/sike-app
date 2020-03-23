import { httpClient } from "./httpClient";

export const guestLogin = async name => {
  //TODO: Env variable here.
  const result = await httpClient.post(
    "http://sike-api.herokuapp.com/auth/guest",
    {
      name: name
    }
  );

  console.log(result);

  return result;
};
