import React, { useEffect } from 'react'
import apiClient from '../../../lib/axios_client';
import { useLoading } from '../../../contexts/LoadingProvider';

export const useAddress = () => {
    const [addresses, setAddresses] = React.useState([]);
    const {setLoading} = useLoading();

    useEffect(() => {
        setLoading(true);
        apiClient.get('/address')
          .then((res) => {
            setAddresses(res.data.data);
          }
        )
        .catch((err) => {
            console.error("Error fetching address:", err);
            // Handle error, e.g., show an error message
          })
          .finally(() => {
            setLoading(false);
          });
            

    },[])
  return { addresses };
}
