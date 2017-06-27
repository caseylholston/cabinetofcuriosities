import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import SpeciesSearch from "../components/SpeciesSearch";
import LocationSearch from "../components/LocationSearch";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="favorites" component={Favorites} />
    <Route path="species" component={SpeciesSearch} />
    <Route path="location" component={LocationSearch} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
