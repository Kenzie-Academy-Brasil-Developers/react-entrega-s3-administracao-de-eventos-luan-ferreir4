import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
