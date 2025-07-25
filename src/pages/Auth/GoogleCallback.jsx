import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import apiClient from "../../lib/axios_client";
import { useLoading } from "../../contexts/LoadingProvider";
import { useDispatch } from "react-redux";
import { set } from "zod/v4-mini";
import { setUser } from "../../redux/User/UserSlice";

export const GoogleCallback = () => {
  const { setLoading } = useLoading();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    apiClient
      .get(`auth/google/callback${location.search}`, {})

      .then((response) => {
        console.log("Google Callback Response:", response);
        console.log(
          "response.data.data.access_token",
          response.data.data.access_token
        );

        setLoading(false);
        localStorage.setItem("token", response.data.data.access_token);

        dispatch(setUser(response.data.data.user));
      })
      .finally(() => {
        setLoading(false);
        navigate('/');
      });
  }, []);
  return <div>GoogleCallback</div>;
};
