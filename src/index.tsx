import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootState from "./modules";

//global styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";

//router
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootState);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
