import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer /* preloadedState */,
  applyMiddleware(thunk)
);

export default store;
