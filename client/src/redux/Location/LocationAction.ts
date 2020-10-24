import { PARSE_USER_POSITION, URL_POSITION } from "./LocationReduxTypes";
import { FetchLocation, ParseUserPosition } from "./LocationTypings";


export const parseUserPosition = (body: any): ParseUserPosition => ({
  type: PARSE_USER_POSITION,
  body
});

export const getUserPosition = (): FetchLocation => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_POSITION);
      const body = await response.json();
      console.log(body);
      dispatch(parseUserPosition(body));
    } catch(e) {
      console.log(e);
    }
  }
}
