const REDUCER = "LOCATION";

//ключ нужный для того чтобы узнать текущую позицию пользователя
const ACCESS_KEY_POSITION = "31fd2bb82754ccff732663cad71ea222";
//url для узнавания текущей позиции пользователя
export const URL_POSITION = `http://api.ipstack.com/check?access_key=${ACCESS_KEY_POSITION}`;