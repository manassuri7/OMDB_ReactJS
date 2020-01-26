import { combineReducers } from "redux";
import { searchMovie } from "./movieReducer";
export default combineReducers({
  searchMovie: searchMovie
});
