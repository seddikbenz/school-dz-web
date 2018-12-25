import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { init } from "@rematch/core";

import App from "./App";
import * as models from "./models";

const store = init({
  models
});

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("AppProvider", () => AppProvider);

AppRegistry.runApplication("AppProvider", {
  rootTag: document.getElementById("root")
});
