import { LocationActionsType, LocationInitialState } from "./LocationTypings";

const initialState: LocationInitialState = {
  test: ""
}

const LocationReducer = (
  state: LocationInitialState = initialState,
  action: LocationActionsType
): LocationInitialState => {
  switch(action.type) {
    //если ни один из типов не подошел
    default: 
      return { ...state };
  }
}

export default LocationReducer;