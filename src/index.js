import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Header from "./components/Header";
import Sedebar from "./components/Sedebar";
import Navigation from "./components/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Sedebar />
    <Navigation/>
  </React.StrictMode>
);
