// hooks/useUser.js
import { useEffect, useState } from "react";
import apiClient from "../lib/axios_client";
import { setUser, setUserLoading } from "../redux/User/UserSlice";
import { useLoading } from "../contexts/LoadingProvider";
import { set } from "zod/v4-mini";

export const useCities = () => {
  const {setLoading} = useLoading();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/cities")
      .then((response) => {
        const citiesData = response.data.data;
        let mappedData =citiesData.map((city) => {
          return {
            value: city.id.toString(),
            label: city.name,
          };
        });
        setCities(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { cities };
};
