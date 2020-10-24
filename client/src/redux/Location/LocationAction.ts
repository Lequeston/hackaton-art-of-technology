import { URL_POSITION } from "./LocationReduxTypes";
import { FetchLocation } from "./LocationTypings";


export const getUserPosition = (): FetchLocation => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_POSITION);
      const body = await response.json();
      console.log(body);
    } catch(e) {
      console.log(e);
    }
  }
}