import React from "react";
import PageNotFound from "./image/NoNo.png";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
function NotFound() {
  return (
    <div>
      <div className="text-center p-5 ">
        <img src={PageNotFound} alt="NoImg" width="50%" />
      </div>
      <div className="text-center">
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <MDBBtn gradient="aqua" className="text-center">
            BACK HOME
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
