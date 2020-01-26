import React, { Component, Fragment } from "react";
import SearchPage from "./SearchPage";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../../redux/actions/searchMovieAction";

class Search extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    this.props.searchMovies(search);
    this.setState({ search: "" });
    setTimeout(() => {
      this.props.history.push(`${process.env.PUBLIC_URL}/movies`);
    }, 750);
  };
  render() {
    return (
      <Fragment>
        <SearchPage
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          stateSearch={this.state.search}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: search => {
      dispatch(searchMovies(search));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
);
