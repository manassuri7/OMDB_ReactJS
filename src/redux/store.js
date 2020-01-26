import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const storageState = localStorage.getItem("movie")
  ? JSON.parse(localStorage.getItem("movie"))
  : {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  storageState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
