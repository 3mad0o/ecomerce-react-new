import React, { useEffect, useRef, useState } from 'react'
import { ProductCard } from './ProductCard';
import { ProductCardEmpty } from './ProductCardEmpty';

export const ProductList = ({title,category_id,isLargeGrid = true}) => {
  const [products, setProducts] = useState(Array.from({ length: 10 })); // Initial 20 products

  
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  const loadMoreProducts = () => {
    setIsLoading(true);

    // Simulating an API call with a timeout
    setTimeout(() => {
      const newProducts = Array.from({ length: 10 }); // Mock 20 new products
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setIsLoading(false);
    }, 1000); // Delay to simulate network request
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);



  return (
    <div className="font-sans py-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center">
        {title || "Products"}
      </h2>
      <div className={`grid  ${isLargeGrid ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" :"grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}  gap-4 sm:gap-6`}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

         {isLoading ?  
        
        Array.from({ length: 10 }).map((_, idx) => (
          <ProductCardEmpty key={idx} />
        ))
      
      : ""}
      </div>
      <div
        ref={observerRef}
        className="h-10 flex justify-center items-center text-gray-600 mt-4"
      >
       
      </div>
    </div>
  );
}
