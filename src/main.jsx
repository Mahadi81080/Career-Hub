import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Root from "./Components/Root/Root.jsx";
import AppliedJobs from "./Components/Applied Jobs/AppliedJobs.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch("/jobs.json")
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:()=>fetch("../jobs.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
