import React from "react";
import { Route } from "react-router-dom";

const HybridRoute = ({ ...props }) => {
  return (
    <>
      <Route {...props} />
    </>
  );
};

export default HybridRoute;
