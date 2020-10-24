import { ThunkAction } from "redux-thunk";

//action


export type LocationActionsType = 
  any;

//state
export type LocationInitialState = {
  test: string
}

export type FetchLocation = ThunkAction<
  Promise<void>,
  LocationInitialState,
  unknown,
  LocationActionsType
>;
