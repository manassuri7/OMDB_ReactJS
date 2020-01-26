import React from "react";
import { MDBCard, MDBCardBody, MDBRow } from "mdbreact";
import Movie from "../Movie";

function MovieListPage({ movieList }) {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="text-center">
        <MDBRow>
          {movieList.Search.map((movie, key) => {
            return (
              <Movie
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                poster={movie.Poster}
                key={key}
                id={movie.imdbID}
              />
            );
          })}
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MovieListPage;
