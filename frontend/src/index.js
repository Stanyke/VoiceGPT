import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SnackbarProviderWrapper from "./store/providers/SnackbarProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProviderWrapper>
    <App />
  </SnackbarProviderWrapper>
);
