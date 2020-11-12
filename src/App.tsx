import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthPage from "./pages/auth";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
    </Switch>
  );
}

export default App;
