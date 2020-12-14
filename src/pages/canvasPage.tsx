import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Wave from "../components/wave/wave";
import PointList from "../components/pointList/pointList";
import MyPoints from "../components/myPoints/myPoints";
import HappyBirthday from "../components/happyBirthday/happyBirthday";

const CanvasPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/wave`} component={Wave} />
      <Route exact path={`${path}/point`} component={PointList} />
      <Route exact path={`${path}/my`} component={MyPoints} />
      <Route exact path={`${path}/happybirthday`} component={HappyBirthday} />
    </Switch>
  );
};

export default CanvasPage;
