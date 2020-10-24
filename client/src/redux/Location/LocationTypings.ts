import { Organization, User } from "@/types/global";
import { ThunkAction } from "redux-thunk";
import { PARSE_USER_POSITION, SET_FILTER } from "./LocationReduxTypes";

//action
export type ParseUserPosition = {
  type: typeof PARSE_USER_POSITION,
  body: any
};

export type SetFilter = {
  type: typeof SET_FILTER,
  filter: String
};

export type LocationActionsType = ParseUserPosition & SetFilter;

//state
export type LocationInitialState = {
  user: User,
  organizations: Array<Organization>
  filter: String
};

export type FetchLocation = ThunkAction<
  Promise<void>,
  LocationInitialState,
  unknown,
  LocationActionsType
>;
