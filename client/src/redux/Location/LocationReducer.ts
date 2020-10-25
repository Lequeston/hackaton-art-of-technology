import { Organization, User } from "@/types/global";
import { PARSE_ORGANIZATION, PARSE_USER_POSITION, SET_FILTER } from "./LocationReduxTypes";
import { LocationActionsType, LocationInitialState, ParseOrganization, ParseUserPosition, SetFilter } from "./LocationTypings";

const initialState: LocationInitialState = {
  user: {
    coordinate: {
      lat: 54.98, lon: 82.89
    }
  },
  organizations: [],
  filter: ""
};

const LocationReducer = (
  state: LocationInitialState = initialState,
  action: LocationActionsType
): LocationInitialState => {
  const parseUserPosition = (): User => {
    const { latitude, longitude } = <ParseUserPosition>action;
    return {
      coordinate: {
        lon: longitude,
        lat: latitude
      }
    };
  };

  const parseOrganization = (): Array<Organization> => {
    const { body } = <ParseOrganization>action;
    console.log(body);
    const array = body['result']['items'];
    const newOrganization = array.map((elem: any): Organization | null => {
      const point = elem['point'];
      if (point) {
        return {
          coordinate: {
            lat: point['lat'],
            lon: point['lon']
          },
          description: {
            title: elem['building_name'] || elem['name'] || 'Название не известно'
          }
        }
      } else {
        return null;
      }
    });
    console.log('newOrganization', newOrganization);
    return newOrganization.filter(elem => elem);
  }

  switch(action.type) {
    case PARSE_ORGANIZATION:
      const organizations = parseOrganization();
      console.log(organizations);
      return { ...state, organizations }
    //парсим позицию пользователя
    case PARSE_USER_POSITION:
      return { ...state, user: parseUserPosition() }
    case SET_FILTER:
      const { filter } = <SetFilter>action;
      return { ...state, filter: filter }
    //если ни один из типов не подошел
    default: 
      return { ...state };
  };
};

export default LocationReducer;