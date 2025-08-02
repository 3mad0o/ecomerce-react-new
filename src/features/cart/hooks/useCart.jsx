import React, { useEffect, useState } from "react";
import { useLoading } from "../../../contexts/LoadingProvider";
import apiClient from "../../../lib/axios_client";
import { getOrCreateGuestId } from "../../../utils/guestCartService";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline, MdOutlineProductionQuantityLimits } from "react-icons/md";

export const useCart = () => {
  const { setLoading } = useLoading();
  const [carts, setCarts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [address, setAddress] = useState(null);

  const removeCart = (cartId) => {
    apiClient
      .delete("carts/remove/" + cartId)
      .then((response) => {
        toast(response.data.message, {
          duration: 4000,
          position: "top-right",
          icon: <MdOutlineDeleteOutline className="text-red-500" />,
          iconTheme: { primary: "#f00", secondary: "#f00" },
        });


        getCarts()
      })
      .catch((error) => {});
  };

  const changeQuantity=(cartId,quantity)=>{
        apiClient
      .post("carts/change-quantity/" + cartId,{
        quantity:quantity
      })
      .then((response) => {
        
        toast(response.data.message, {
          duration: 4000,
          position: "top-right",
          icon: <MdOutlineProductionQuantityLimits className="text-green-500" />,
          iconTheme: { primary: "#f00", secondary: "#f00" },
        });


        getCarts()
      })
      .catch((error) => {});
  }
  const getCarts= ()=>{
   setLoading(true);
    apiClient
      .get(`/carts`, {
        params: {
          guest_id: getOrCreateGuestId(),
        },
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
  }
  useEffect(() => {
    getCarts()
  }, []);

  return { carts, setCarts, subtotal, grandTotal, tax, address, removeCart,changeQuantity };
};
