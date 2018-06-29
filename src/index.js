import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'mobx-react';
import App from "./App.js";
import RootStore from "./models/rootStore.js";


const store = new RootStore();

ReactDOM.render(
  <Provider rootStore={store}>
  <App />
  </Provider>,
  document.getElementById("root")
);