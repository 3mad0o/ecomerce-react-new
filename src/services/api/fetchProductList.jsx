import React, { useEffect, useRef, useState } from 'react'
import apiClient from '../../lib/axios_client';

export const fetchProductList = ({filters}) => {


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
          const response = await apiClient.get(url, {
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
    
  return {isLoading, products, nextPageUrl, loadMoreProducts, observerRef};
}
