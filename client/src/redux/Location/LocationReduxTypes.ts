const REDUCER = "LOCATION";

export const PARSE_USER_POSITION = `${REDUCER}/PARSE_USER_POSITION`;
export const PARSE_ORGANIZATION = `${REDUCER}/ARSE_ORGANIZATION`;
export const SET_FILTER = `${REDUCER}/SET_FILTER`;

//ключ нужный для того чтобы узнать текущую позицию пользователя
const ACCESS_KEY_POSITION = "31fd2bb82754ccff732663cad71ea222";
//url для узнавания текущей позиции пользователя
export const URL_POSITION = `https://api.ipstack.com/check?access_key=${ACCESS_KEY_POSITION}`;


