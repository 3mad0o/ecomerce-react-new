import React from "react";
import { Slider } from "../features/Slider/Components/Slider";
import { CategorySlider } from "../features/Category/Components/CategorySlider";
import { ProductList } from "../features/Products/Components/ProductList";

export const Home = () => {
  return (
    <>
      <Slider />

      <CategorySlider />

      <ProductList />
    </>
  );
};
