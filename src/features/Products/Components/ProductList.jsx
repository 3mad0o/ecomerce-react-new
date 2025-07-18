import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { ProductCardEmpty } from "./ProductCardEmpty";
import { useProductList } from "../hooks/useProductList";

export const ProductList = ({ title, isLargeGrid = true, filters }) => {



  const {isLoading, products, nextPageUrl, loadMoreProducts, observerRef} =useProductList({ filters });
  // Intersection observer to trigger loading more when scrolled to bottom
  // useEffect(() => {
  //   if (!observerRef.current) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         loadMoreProducts(nextPageUrl);
  //       }
  //     },
  //     { threshold: 1.0 }
  //   );

  //   observer.observe(observerRef.current);

  //   return () => observer.disconnect();
  // }, [nextPageUrl]);

  return (
    <div className="font-sans">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center">
          {title}
        </h2>
      )}

      <div
        className={`grid ${
          isLargeGrid
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        } gap-4 sm:gap-6`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {isLoading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <ProductCardEmpty key={idx} />
          ))}
      </div>

      {/* Intersection observer target */}
      <div className="h-10 min-h-[100px] flex justify-center items-center text-gray-600 mt-4">
        {nextPageUrl && (
          <button
            type="button"
            onClick={() => loadMoreProducts(nextPageUrl)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
