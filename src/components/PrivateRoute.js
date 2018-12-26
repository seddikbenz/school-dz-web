import React from "react";
import { Redirect, Route } from "react-router-dom";

import Auth from "./Auth";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <WithComponent {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);
