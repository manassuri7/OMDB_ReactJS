import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";
const MovieInfoPage = ({ movieInfo }) => {
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Poster,
    Type
  } = movieInfo;
  return (
    <MDBCard className="my-5 px-3 pb-3">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-2">
          Movie Description
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">{Plot}</p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src={Poster} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h6 className="font-weight-bold  mb-3 green-text ">
              <MDBIcon icon="film" className="pr-2" />
              {Type},{Genre}
            </h6>

            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{Title}</strong>
            </h3>
            <ul>
              <li> Language: {Language}</li>
              <li> RunTime: {Runtime}</li>
              <li>Actors : {Actors}</li>
              <li>Writer : {Writer}</li>
              <li>Released: {Released}</li>
            </ul>
            <p>
              by:
              <strong>{Director}</strong>, Año: {Year}
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <MDBBtn color="success" size="md" className="waves-light ">
                Back Home
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default MovieInfoPage;
