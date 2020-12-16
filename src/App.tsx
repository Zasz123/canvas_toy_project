import React from "react";

import { Switch, Route } from "react-router-dom";

// import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";
import CanvasPage from "./pages/canvasPage";

const App = () => {
  return (
    <Switch>
      <Route path="/canvas" component={CanvasPage} />
      <Route path="/" component={HomePage} />

      <Route component={() => <div>404 Not Found</div>} />
    </Switch>
  );
};

export default App;
