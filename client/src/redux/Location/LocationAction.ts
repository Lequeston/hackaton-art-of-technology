import { CoordinateMap } from "@/types/global";
import { PARSE_USER_POSITION, URL_POSITION, SET_FILTER, PARSE_ORGANIZATION } from "./LocationReduxTypes";
import { FetchLocation, ParseOrganization, ParseUserPosition, SetFilter } from "./LocationTypings";


export const parseUserPosition = (latitude: number, longitude: number): ParseUserPosition => ({
  type: PARSE_USER_POSITION,
  latitude,
  longitude
});

export const setFilter = (filter: String): SetFilter => ({
  type: SET_FILTER,
  filter: filter
});

export const parseOrganization = (body: any): ParseOrganization => ({
  type: PARSE_ORGANIZATION,
  body
})

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

export const fetchOrganizations = (position: CoordinateMap, category: string): FetchLocation => {
  return async (dispatch) => {
    try {
      if (category && position){
        const url = `https://catalog.api.2gis.ru/3.0/items?q=${category}&sort_point=${position.lon},${position.lat}&key=rugtio3557&fields=items.point`;
        const response = await fetch(url);
        const body = await response.json();
        dispatch(parseOrganization(body));
      }
    } catch(e) {
      console.error(e);
    }
  }
}
