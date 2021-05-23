import React from "react";
import ReactDOM from "react-dom";

import "./style/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/app";
const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
