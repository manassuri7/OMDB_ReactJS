import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "../NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/index";
import Register from "../User/Register";
import Login from "../User/Login";
import MovieList from "../MovieList/";
import NotFound from "../NoFound";
import MovieInfo from "../MovieInfo";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />

        <div>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/login`}
              component={Login}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/user/register`}
              component={Register}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/movies`}
              component={MovieList}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/movies/:id`}
              component={MovieInfo}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
