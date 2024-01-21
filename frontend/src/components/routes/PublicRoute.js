import React from "react";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;
