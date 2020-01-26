import React, { Component } from "react";
import MoviePage from "./MovieInfoPage";
import { connect } from "react-redux";
import { store } from "../../redux/store";
store.subscribe(() => {
  localStorage.setItem("movie", JSON.stringify(store.getState()));
});
class MovieInfo extends Component {
  render() {
    return (
      <div>
        <MoviePage movieInfo={this.props.movieInfo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieInfo: state.searchMovie.movieInfo
});

export default connect(
  mapStateToProps,
  null
)(MovieInfo);
