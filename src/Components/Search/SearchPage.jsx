import React from "react";
import { MDBNavItem, MDBFormInline } from "mdbreact";

function SearchPage({ handleChange, handleSubmit, stateSearch }) {
  return (
    <div>
      <MDBNavItem>
        <MDBFormInline waves onSubmit={handleSubmit}>
          <div className="md-form my-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              value={stateSearch}
            />
          </div>
        </MDBFormInline>
      </MDBNavItem>
    </div>
  );
}

export default SearchPage;
