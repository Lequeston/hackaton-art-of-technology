import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import LocationReducer from './Location/LocationReducer';

export const rootReducer = combineReducers({
  location: LocationReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))