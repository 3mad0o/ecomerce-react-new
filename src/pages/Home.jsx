import React from "react";
import { Slider } from "../features/Slider/Components/Slider";
import { CategorySlider } from "../features/Category/Components/CategorySlider";
import { ProductList } from "../features/Products/Components/ProductList";
import { Link } from "react-router";

export const Home = () => {
  const [filters, setFilters] = React.useState({
    sortBy: "no_of_sales",
    order: "desc",
  });
  const [selectedFilters, setSelectedFilters] = React.useState("no_of_sales");
  
  return (
    <>
      <Slider />

      <CategorySlider />

      <div className="flex flex-row justify-center items-center gap-10">
        <button
          className={`text-2xl ${
            selectedFilters == "no_of_sales" ? "border-b-2 font-semibold border-black p-1" : ""
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
            selectedFilters == "discounts" ? "border-b-2 font-semibold border-black p-1" : ""
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
    </>
  );
};
