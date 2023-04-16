import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HybridRoute from "./HybridRoute";
import { ROUTES } from "./paths";

const router = () => (
  <Switch>
    <HybridRoute exact path={`${ROUTES.root}`} render={() => <Dashboard />} />
  </Switch>
);

export default router;
