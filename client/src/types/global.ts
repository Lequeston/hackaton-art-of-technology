const MODULE = 'GLOBAL';
export const PEOPLE = `${MODULE}/PEOPLE`;
export const ORGANIZATION = `${MODULE}/ORGANIZATION`;

export type CoordinateMap = {
  lon: number, //долгота
  lat: number //широта
}

export type Description = {
  title: string
}

export type ObjectType = 
  typeof PEOPLE |
  typeof ORGANIZATION;

export type Organization = {
  coordinate: CoordinateMap,
  description: Description,
  type: ObjectType
}