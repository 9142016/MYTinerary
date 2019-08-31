import { combineReducers } from "redux";
import isSignedInReducer from "./isSignedInReducer";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
  isSignedIn: isSignedInReducer,
  cities: citiesReducer,
  itineraries: itinerariesReducer
});

export default rootReducer;
