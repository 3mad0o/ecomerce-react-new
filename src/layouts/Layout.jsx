import React, { use, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Outlet } from "react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { CartSlide } from "../features/cart/components/CartSlide";
import { DiscountAd } from "../features/floatingAds/components/DiscountAd";
import { useLoading } from "../contexts/LoadingProvider";
import { Loading } from "../components/Loading";
import apiClient from "../lib/axios_client";
import { updateCartCount } from "../redux/Cart/CartSlice";
import { get } from "react-hook-form";
import { getOrCreateGuestId } from "../utils/guestCartService";
import { useCategories } from "../features/Category/hooks/useCategories";

export const Layout = () => {
  const isCartSlideOpen = useSelector((state) => state.carts.isCartSlideOpen);
  const { loading } = useLoading();
  const dispatch = useDispatch();

  const {categories} = useCategories();
  const getCartCount = ()=>{
    apiClient.get('/carts/count',{
      params: {
        guest_id: getOrCreateGuestId()
      }
    })
      .then((res) => {
        let count =res.data.data.count?? 0;
        dispatch(updateCartCount(count));

      })
      .catch((err) => {
        console.error("Error fetching cart count:", err);
      });
  }
  useEffect(() => { 

    getCartCount();
  }, []);
  return (
    <div className="relative">
      <NavBar />
      {/* <Banner /> */}
      <Outlet />

      {isCartSlideOpen && <CartSlide />}
      {loading && <Loading />}

      {/* <DiscountAd /> */}
      {/* {true && <LoadingSpinner/>} */}
    </div>
  );
};
