import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from './../App.jsx'
import Home from "../pages/servicePages/Home.jsx";
import Login from "../Components/auth/Login.jsx";
import Register from "../Components/auth/Register.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <h2> route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;