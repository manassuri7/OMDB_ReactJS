import { SEARCH_MOVIE, SEARCH_MOVIES } from "../actions/type";

const initialState = {
  movieList: [],
  movieInfo: {}
};

export const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movieList: action.payload
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movieInfo: action.payload
      };
    default:
      return state;
  }
};
