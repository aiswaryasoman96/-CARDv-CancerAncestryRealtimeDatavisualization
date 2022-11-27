import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutUs from "./AboutUs";
import AboutData from "./AboutData";
import OverViewChart from "./overViewChart";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
const globalMax = window.Number.MIN_SAFE_INTEGER;
window.max = globalMax

root.render(
  <React.StrictMode>
  <Router>
    <Layout></Layout>
    <Routes>
      <Route path="/" element={<OverViewChart />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/aboutproject" element={ <AboutData /> } />
    </Routes>
  </Router>
  </React.StrictMode>
);

