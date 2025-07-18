import React, { useEffect, useState } from 'react'
import apiClient from '../../../lib/axios_client';

export const useProductReviews = ({slug}) => {

    const [comments, setComments] = useState([]);
  const [product, setProduct] = useState(null);
  const [url, setUrl] = useState(
    `products/${slug}/reviews`
  );

  const loadReviews = () => {
    apiClient
      .get(url)
      .then((res) => {
        const data = res.data.data;
        if (data) {
          setComments((prev)=>[...prev,...data]);
            setUrl(res.data?.links?.next ?? null);

        }
      })
      .catch((err) => console.error("Error fetching product:", err));
  };


  const loadBasicProductDetails = () => {

    apiClient
      .get(`/products/${slug}/basic-info`)
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
      })
      .catch((err) => console.error("Error fetching product:", err));


  }
  useEffect(() => {
    loadReviews();
    loadBasicProductDetails()
  }, []);
  return { comments, product, loadReviews, setComments, setProduct,url}
}
