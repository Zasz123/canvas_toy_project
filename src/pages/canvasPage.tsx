import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Wave from "../components/wave/wave";
import PointList from "../components/pointList/pointList";

const CanvasPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/wave`} component={Wave} />
      <Route exact path={`${path}/point`} component={PointList} />
    </Switch>
  );
};

export default CanvasPage;
