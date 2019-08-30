import { combineReducers } from "redux";
import isSignedInReducer from "./isSignedInReducer";
import citiesReducer from "./citiesReducer";

const rootReducer = combineReducers({
  isSignedIn: isSignedInReducer,
  cities: citiesReducer
});

export default rootReducer;
