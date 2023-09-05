import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Header from "./components/Header";
import Sedebar from "./components/Sedebar";
import Card from "./components/Card";
import UseSearch from './useSearch'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <div style={{ display: "flex" }}>
    <Sedebar />
    <Card onSearch={onSearch}/>
    </div>
    <UseSearch/>
  </React.StrictMode>
);
