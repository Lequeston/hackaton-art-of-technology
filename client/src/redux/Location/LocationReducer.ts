import { User } from "@/types/global";
import { PARSE_USER_POSITION } from "./LocationReduxTypes";
import { LocationActionsType, LocationInitialState } from "./LocationTypings";

const initialState: LocationInitialState = {
  user: {
    coordinate: null
  },
  organizations: []
}

const LocationReducer = (
  state: LocationInitialState = initialState,
  action: LocationActionsType
): LocationInitialState => {
  const parseUserPosition = (): User => {
    const { body } = action;
    return {
      coordinate: {
        lon: body['longitude'],
        lat: body['latitude']
      }
    }
  }
  switch(action.type) {
    //парсим позицию пользователя
    case PARSE_USER_POSITION:
      console.log('body', action.body); 
      return { ...state, user: parseUserPosition() }
    //если ни один из типов не подошел
    default: 
      return { ...state };
  }
}

export default LocationReducer;