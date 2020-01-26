import React from "react";
import { MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const MoviePage = ({ title, poster, year, type, id, movieInfo }) => {
  return (
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
      <MDBView hover className="rounded z-depth-5 mb-4" waves>
        <img className="img-fluid" src={poster} alt="" />
        <MDBMask overlay="white-slight" />
      </MDBView>

      <h6 className="font-weight-bold mb-3 pink-text">
        <MDBIcon icon="map" className="pr-2" />
        {type}
      </h6>

      <h4 className="font-weight-bold mb-3">
        <strong>{title}</strong>
      </h4>
      <p>{year}</p>

      <MDBBtn color="pink" rounded size="md" onClick={() => movieInfo(id)}>
        Read more
      </MDBBtn>
      <hr />
    </MDBCol>
  );
};

export default MoviePage;
