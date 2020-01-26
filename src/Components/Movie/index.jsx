import React, { Component, Fragment } from "react";
import MoviePage from "./MoviePage";
import { connect } from "react-redux";
import { searchMovie } from "../../redux/actions/searchMovieAction";
import { withRouter } from "react-router-dom";

class Movie extends Component {
  searchMovie = id => {
    console.log("voy a buscar la pelicula");

    this.props.searchMovie(id);
    setTimeout(() => {
      this.props.history.push(`${process.env.PUBLIC_URL}/movies/${id}`);
    }, 750);
  };
  render() {
    const { title, year, type, poster, id } = this.props;
    return (
      <Fragment>
        <MoviePage
          title={title}
          year={year}
          type={type}
          poster={poster}
          id={id}
          movieInfo={this.searchMovie}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  movieInfo: state.searchMovie.movieInfo
});

const mapDispatchToProps = dispatch => {
  return {
    searchMovie: id => {
      dispatch(searchMovie(id));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie)
);
