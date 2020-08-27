import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Routes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin" component={Dashboard} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
