import { User } from "@/types/global";
import { PARSE_USER_POSITION, SET_FILTER } from "./LocationReduxTypes";
import { LocationActionsType, LocationInitialState, ParseUserPosition, SetFilter } from "./LocationTypings";

const initialState: LocationInitialState = {
  user: {
    coordinate: null
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
  switch(action.type) {
    //парсим позицию пользователя
    case PARSE_USER_POSITION:
      return { ...state, user: parseUserPosition() }
    case SET_FILTER:
      const { filter } = <SetFilter>action;
      return { ...state }
    //если ни один из типов не подошел
    default: 
      return { ...state };
  };
};

export default LocationReducer;