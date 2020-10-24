import { Organization, User } from "@/types/global";
import { ThunkAction } from "redux-thunk";
import { PARSE_ORGANIZATION, PARSE_USER_POSITION, SET_FILTER } from "./LocationReduxTypes";

//action
export type ParseUserPosition = {
  type: typeof PARSE_USER_POSITION,
  latitude: number,
  longitude: number
};

export type SetFilter = {
  type: typeof SET_FILTER,
  filter: String
};

export type ParseOrganization = {
  type: typeof PARSE_ORGANIZATION,
  body: any
}
export type LocationActionsType = 
  ParseUserPosition | 
  SetFilter |
  ParseOrganization;

//state
export type LocationInitialState = {
  user: User,
  organizations: Array<Organization>
  filter: string
};

export type FetchLocation = ThunkAction<
  Promise<void>,
  LocationInitialState,
  unknown,
  LocationActionsType
>;
