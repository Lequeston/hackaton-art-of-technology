import { rootReducer } from '@redux/reduxStore';

export type CoordinateMap = {
  lon: number, //долгота
  lat: number //широта
}

export type Description = {
  title: string
}

export type Organization = {
  coordinate: CoordinateMap,
  description: Description,
}

export type User = {
  coordinate: CoordinateMap,
} 

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
