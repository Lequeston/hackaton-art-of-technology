import { PARSE_USER_POSITION, URL_POSITION, SET_FILTER } from "./LocationReduxTypes";
import { FetchLocation, ParseUserPosition, SetFilter } from "./LocationTypings";


export const parseUserPosition = (latitude: number, longitude: number): ParseUserPosition => ({
  type: PARSE_USER_POSITION,
  latitude,
  longitude
});

export const getUserPosition = (): FetchLocation => {
  return async (dispatch) => {
    try {
      if (!window.navigator.geolocation){
        console.error('Дайте браузеру геопозицию')
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          dispatch(parseUserPosition(
            position.coords.latitude,
            position.coords.longitude,
          ));
        })
      }
    } catch(e) {
      console.log(e);
    };
  };
};

export const setFilter = (filter: String): SetFilter => ({
  type: SET_FILTER,
  filter: filter
});
