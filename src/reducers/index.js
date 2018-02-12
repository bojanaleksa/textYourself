import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from './userReducer';
import egoReducer from './egoReducer';
import messageReducer from './messageReducer';
import currentReducer from './currentReducer';

export const reducers = combineReducers({
  routing: routerReducer,
  user: userReducer,
  egos: egoReducer,
  messages: messageReducer,
  current: currentReducer
});
