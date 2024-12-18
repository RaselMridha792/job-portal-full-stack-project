import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();

  if (loader) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
