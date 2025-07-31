import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <>
        <App />
        <SpeedInsights /> {/* ✅ Add this here */}
      </>
    </BrowserRouter>
  </React.StrictMode>
);
