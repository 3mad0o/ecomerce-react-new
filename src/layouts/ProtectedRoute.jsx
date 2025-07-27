import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const { user, loading } = useSelector((state) => state.user);

  if (loading) {
    return null; // or <Loading /> — don't redirect yet
  }



  return user ? <Outlet /> : <Navigate to="/" />;
};
