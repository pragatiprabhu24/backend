import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../service/Api";
import { getCurrentUser } from "../../redux/features/auth/AuthActions";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
    }
  };

  useEffect(() => {
    getUser();
  });
  if (localStorage.getItem("token")) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
