import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Wave from "../components/canvas/wave/wave";

const CanvasPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/wave`} component={Wave} />
    </Switch>
  );
};

export default CanvasPage;
