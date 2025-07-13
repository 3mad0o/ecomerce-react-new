import React, { useEffect, useState } from "react";
import { Slider } from "../features/Slider/Components/Slider";
import { CategorySlider } from "../features/Category/Components/CategorySlider";
import { ProductList } from "../features/Products/Components/ProductList";
import { Link } from "react-router";
import { ProductSwiper } from "../features/Products/Components/ProductSwiper";
import { IoFlashOutline } from "react-icons/io5";
import { BannerSlider } from "../features/banner/components/BannerSlider";
import axios from "axios";

export const Home = () => {
  const [filters, setFilters] = React.useState({
    sortBy: "no_of_sales",
    order: "desc",
  });
  const [selectedFilters, setSelectedFilters] = React.useState("no_of_sales");
  const [lightingDeals, setLightingDeals] = useState([]);

  const getHome = () => {
    axios.get("http://192.168.1.32:8000/api/v1/home").then((response) => {
      if (response.data && response.data.data) {
        console.log(response.data.data.lighting_deals);
        
        setLightingDeals(response.data.data.lighting_deals);
      }
    });
  };
  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <Slider />

      <div className="space-y-3 container mx-auto">
        <CategorySlider />
        <ProductSwiper
          title={"Lighting Deals"}
          icon={<IoFlashOutline className="text-yellow-400 text-3xl" />}
          products={lightingDeals}
        />

        <BannerSlider />
        <div className="flex flex-row justify-center items-center gap-10">
          <button
            className={`text-2xl ${
              selectedFilters == "no_of_sales"
                ? "border-b-2 font-semibold border-black p-1"
                : ""
            }`}
            onClick={() => {
              setSelectedFilters("no_of_sales");

              setFilters({
                sortBy: "no_of_sales",
                order: "desc",
              });
            }}
          >
            top selling
          </button>

          <button
            className={`text-2xl  ${
              selectedFilters == "discounts"
                ? "border-b-2 font-semibold border-black p-1"
                : ""
            }`}
            onClick={() => {
              setSelectedFilters("discounts");

              setFilters({
                sortBy: "discounts",
                order: "desc",
              });
            }}
          >
            discounts
          </button>
        </div>
        <ProductList filters={filters} />
      </div>
    </>
  );
};
