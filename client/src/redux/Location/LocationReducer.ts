import { User } from "@/types/global";
import { PARSE_USER_POSITION, SET_FILTER } from "./LocationReduxTypes";
import { LocationActionsType, LocationInitialState } from "./LocationTypings";

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
    const { body } = action;
    return {
      coordinate: {
        lon: body['longitude'].toFixed(6),
        lat: body['latitude'].toFixed(6)
      }
    };
  };
  switch(action.type) {
    //парсим позицию пользователя
    case PARSE_USER_POSITION:
      console.log('body', action.body); 
      return { ...state, user: parseUserPosition() }
    case SET_FILTER:
      const newState = {...state};
      newState.filter = action.filter;
      return newState;
    //если ни один из типов не подошел
    default: 
      return { ...state };
  };
};

export default LocationReducer;