// hooks/useUser.js
import { useEffect } from "react";
import apiClient from "../lib/axios_client";
import { useDispatch } from "react-redux";
import { setUser, setUserLoading } from "../redux/User/UserSlice";

export const useUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserLoading(true));
    apiClient
      .get("auth/user")
      .then((response) => {
        const userData = response.data.data;
        dispatch(setUser(userData));
      })
      .catch((error) => {
        dispatch(setUser(null));
        console.error("Error fetching user data:", error);
      })
      .finally(() => {
        dispatch(setUserLoading(false));
      });
  }, []);
};
