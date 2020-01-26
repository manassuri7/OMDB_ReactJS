import React, { Component, Fragment } from "react";
import MovieListPage from "./MovieListPage";
import { connect } from "react-redux";
import SearchNoResult from "../SearchNoResult";

class MovieList extends Component {
  render() {
    return (
      <Fragment>
        {console.log(this.props.movieList)}
        {this.props.movieList.Search ? (
          <MovieListPage movieList={this.props.movieList} />
        ) : (
          <SearchNoResult />
        )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.searchMovie.movieList
});

export default connect(
  mapStateToProps,
  null
)(MovieList);
