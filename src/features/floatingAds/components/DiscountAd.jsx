import React from "react";
import { Link } from "react-router";

export const DiscountAd = () => {
  return (
    <Link className="z-50 fixed bottom-5 right-5 bg-black p-2 rounded-md text-white text-center animate-bounce duration-0">
      <span className="block">See</span>
      <span className="block">The</span>
      <span className="block">Latest</span>
      <span className="block">Deals</span>
    </Link>
  );
};
