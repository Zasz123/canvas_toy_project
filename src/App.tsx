import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthPage from "./pages/authPage";
import CanvasPage from "./pages/canvasPage";

const App = () => {
  return (
    <Switch>
      <Route path="/canvas" component={CanvasPage} />
      <Route exact path="/" component={AuthPage} />

      <Route component={() => <div>404 Not Found</div>} />
    </Switch>
  );
};

export default App;
