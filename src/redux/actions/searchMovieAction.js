import { SEARCH_MOVIES, SEARCH_MOVIE, Apikey } from "./type";
import axios from "axios";

export const searchMovies = search => async dispatch => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${Apikey}&s=${search}`
  );

  dispatch({
    type: SEARCH_MOVIES,
    payload: response.data
  });
};

export const searchMovie = id => async dispatch => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${Apikey}&i=${id}`
  );

  dispatch({
    type: SEARCH_MOVIE,
    payload: response.data
  });
};

//http://www.omdbapi.com/?apikey=e4a7f8e9&i=tt0235679
