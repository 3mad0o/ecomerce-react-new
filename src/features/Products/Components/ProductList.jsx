import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { ProductCardEmpty } from "./ProductCardEmpty";

export const ProductList = ({ title, isLargeGrid = true, filters }) => {
  const [products, setProducts] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [initUrl, setInitUrl] = useState(
    "http://192.168.1.32:8000/api/v1/products"
  );
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  console.log("🚦 Current nextPageUrl:", nextPageUrl);

  const loadMoreProducts = async (url) => {
    if (!url || isLoading) return;

    console.log("📦 Fetching from:", url);
    setIsLoading(true);

    try {
      const response = await axios.get(url, {
        params: filters,
      });
      setProducts((prev) => [...prev, ...response.data.data]);

      const next = response.data.links?.next ?? null;
      console.log("➡️ Next page:", next);
      setNextPageUrl(next);
    } catch (error) {
      console.error("❌ Failed to load products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load on mount
  useEffect(() => {
    setNextPageUrl(initUrl);
    setProducts([]);
    loadMoreProducts(initUrl);
  }, [filters]);

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
