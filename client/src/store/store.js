import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

const store = createStore(
  rootReducer /* preloadedState */,
  compose(
    applyMiddleware(thunk),
    persistState(/*paths, config*/),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
