import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "../pages/signin/Signin";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../pages/dashboard/dashboard";
function RouterDom() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
export default RouterDom;
