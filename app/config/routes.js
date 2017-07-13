import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import SpeciesSearch from "../components/SpeciesSearch";
import LocationSearch from "../components/LocationSearch";
import Login from "../components/Login";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="login" component={Login} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
