import { createBrowserRouter } from "react-router-dom";
import App from "./../App.jsx";
import Home from "../pages/servicePages/Home.jsx";
import Login from "../Components/auth/Login.jsx";
import Register from "../Components/auth/Register.jsx";
import JobDetails from "../pages/job details components/JobDetails.jsx";
import PrivetRoute from "../Components/privet routes/PrivetRoute.jsx";
import ApplyJob from "../pages/job application/ApplyJob.jsx";
import MyApplication from "../pages/My application/MyApplication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2> route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/jobs/details/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/details/${params.id}`),
      },
      {
        path: "/job/application/:id",
        element: (
          <PrivetRoute>
            <ApplyJob></ApplyJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/MyApplications",
        element: (
          <PrivetRoute>
            <MyApplication></MyApplication>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
