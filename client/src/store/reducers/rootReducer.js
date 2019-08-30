import { combineReducers } from "redux";
import isSignedInReducer from "./isSignedIn";
import citiesReducer from "./cities";

const rootReducer = combineReducers({
  isSignedIn: isSignedInReducer,
  cities: citiesReducer
});

export default rootReducer;
