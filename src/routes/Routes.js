import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import { Home, Tweets } from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";

const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <Home path="/" exact />
        <Tweets path="/tweets" exact />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
