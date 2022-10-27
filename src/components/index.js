import React from "react";
import  { home } from "./shop/"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={home} />
        
      </Switch>
    </Router>
  );
};

export default Routes;
