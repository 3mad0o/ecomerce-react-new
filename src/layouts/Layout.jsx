import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Outlet } from "react-router";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import { CartSlide } from "../features/cart/components/CartSlide";

export const Layout = () => {
    const isCartSlideOpen = useSelector((state) => state.carts.isCartSlideOpen);

  return (
      <div className="relative">
        <NavBar />
        <Banner />
        <Outlet />

        {isCartSlideOpen && <CartSlide />}
        {/* {true && <LoadingSpinner/>} */}
      </div>
  );
};
