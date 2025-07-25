import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductList } from "../features/Products/Components/ProductList";
import { CategorySlider } from "../features/Category/Components/CategorySlider";
import { ProductFilter } from "../features/Products/Components/ProductFilter";
import { CiFilter } from "react-icons/ci";
import apiClient from "../lib/axios_client";

export const Category = () => {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: slug,
    sortBy: "no_of_sales",
    order: "desc",
  });
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    apiClient
      .get("/categories/" + slug)
      .then((response) => {
        if (response.data && response.data.data) {
          setCategories(response.data.data.categories);
        }
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      })
      .finally(() => {});
  }, [slug]);
  return (
    <>
      <CategorySlider categories={categories} />
      <ProductFilter show={showFilter} setShow={setShowFilter} />

      <div className="flex flex-col items-start p-3 gap-3">
        <button
          className="flex items-center gap-1 rounded-3xl px-5 bg-gray-200 text-black p-2 hover:bg-gray-300 transition-all duration-200"
          type="button"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter <CiFilter className="text-xl" />
        </button>
        <ProductList filters={filters} />
      </div>
    </>
  );
};
