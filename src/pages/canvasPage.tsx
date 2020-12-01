import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Wave from "../components/wave/wave";
import PointList from "../components/pointList/pointList";
import ValueOfExistence from "../components/valueOfExistence/valueOfExistence";

const CanvasPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/wave`} component={Wave} />
      <Route exact path={`${path}/point`} component={PointList} />
      <Route exact path={`${path}/existence`} component={ValueOfExistence} />
    </Switch>
  );
};

export default CanvasPage;
