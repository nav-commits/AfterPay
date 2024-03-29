import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "./Context/MainContext";
import BioStorybookWidget from "bio-storybook-widget";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BioStorybookWidget projectSource={"afterpay"} />
    <BrowserRouter>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
