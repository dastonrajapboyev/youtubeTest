import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Header from "./components/Header";
import Sedebar from "./components/Sedebar";
import Navigation from "./components/Navigation";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Sedebar />
    <Navigation />
    <Card />
  </React.StrictMode>
);
