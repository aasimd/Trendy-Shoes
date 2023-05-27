import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { PageContext, PageContextProvider } from "./contexts/PageContext";
// Call make Server
makeServer();
export { PageContext };
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
