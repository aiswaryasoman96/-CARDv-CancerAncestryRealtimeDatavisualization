import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutUs from "./AboutUs";
import AboutData from "./AboutData";
import OverViewChart from "./overViewChart";
import ImpCircle from "./radialBarChart";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout, { addLayout } from "./layout";
import overViewChart from "./overViewChart";


const root = ReactDOM.createRoot(document.getElementById("root"));
const globalMax = window.Number.MIN_SAFE_INTEGER;
window.max = globalMax

//  const router = createBrowserRouter([{
//     path: '/',
//     element: 
//     <Layout>
//       <OverViewChart />
//     </Layout>
//  },
//  {
//   path: '/aboutus',
//   element:  <Layout>
//               <AboutUs />
//             </Layout>
//  },
//  {
//   path: '/aboutproject',
//   element:  <Layout>
//                 <AboutData />
//             </Layout>

//  }
// ])



root.render(
  <React.StrictMode>
  {/* <RouterProvider router={router} /> */}
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

