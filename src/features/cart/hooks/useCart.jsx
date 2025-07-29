import React, { useEffect, useState } from "react";
import { useLoading } from "../../../contexts/LoadingProvider";
import apiClient from "../../../lib/axios_client";
import { getOrCreateGuestId } from "../../../utils/guestCartService";

export const useCart = () => {
  const { setLoading } = useLoading();
  const [carts, setCarts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [tax,setTax]= useState(0);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/carts`,{
        params:{
        guest_id: getOrCreateGuestId()
        }
      })
      .then((res) => {
        const data = res.data.data;
        setCarts(data.carts);
        setSubtotal(data.subtotal);
        setGrandTotal(data.grand_total);
        setTax(data.tax);
        setAddress(data.address);
      })
      .catch((err) => console.error("Error fetching product:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { carts, setCarts, subtotal, grandTotal, tax, address};
};
