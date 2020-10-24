import { Organization, User } from "@/types/global";
import { ThunkAction } from "redux-thunk";
import { PARSE_USER_POSITION } from "./LocationReduxTypes";

//action
export type ParseUserPosition = {
  type: typeof PARSE_USER_POSITION,
  body: any
}

export type LocationActionsType = 
  ParseUserPosition;

//state
export type LocationInitialState = {
  user: User,
  organizations: Array<Organization>
}

export type FetchLocation = ThunkAction<
  Promise<void>,
  LocationInitialState,
  unknown,
  LocationActionsType
>;
