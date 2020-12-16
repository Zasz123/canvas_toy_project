import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import Home from "../components/home/home";

const HomePage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact component={Home} path={`${path}`} />
    </>
  );
};

export default HomePage;
