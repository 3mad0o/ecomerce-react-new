import React, { useEffect, useState } from "react";
import apiClient from "../../../lib/axios_client";
import { useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, toggleCartSide } from "../../../redux/Cart/CartSlice";
import { useLoading } from "../../../contexts/LoadingProvider";
import { getOrCreateGuestId } from "../../../utils/guestCartService";

export const useProductDeatils = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const { setLoading } = useLoading();

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [quantity,setQuantity] =useState(1);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/products/${slug}`)
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
        setSelectedImage(data.main_image);
      })
      .catch((err) => console.error("Error fetching product:", err))
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const handleVariantChange = (attributeId, valueId) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [attributeId]: valueId,
    }));
    searchParams.set(`attr_${attributeId}`, valueId);
    setSearchParams(searchParams);
  };

  const handleAddToCart = () => {
    const hasAllSelected = product?.attributes?.every((attr) =>
      selectedVariants.hasOwnProperty(attr.id)
    );

    if (hasAllSelected) {
      apiClient
        .post(`/carts/product/${product.id}/add-to-cart`, {
          product_id: product.id,
          quantity: quantity,
          selected_variants: selectedVariants,
          guest_id: getOrCreateGuestId(),
        })
        .then((res) => {
          if (res.data.data.increment) {
            dispatch(addToCart());
           
          }
           toast("Added Successfully", {
              duration: 4000,
              position: "top-right",
              icon: "🛒",
              iconTheme: { primary: "#f00", secondary: "#f00" },
            });
          // dispatch(toggleCartSide());
          console.log("Cart item added successfully:", res.data);
        })
        .catch((err) => {
          console.error("Error adding item to cart:", err);
        });
    } else {
      toast("Select all attributes!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        iconTheme: { primary: "#f00", secondary: "#f00" },
      });
    }
  };

  const calculateDiscountedPrice = () => {
    if (!product) return 0;
    if (product.discount_type === "percentage") {
      return (product.price - (product.price * product.discount) / 100).toFixed(
        2
      );
    } else {
      return (product.price - product.discount).toFixed(2);
    }
  };

  return {
    product,
    selectedImage,
    setSelectedImage,
    selectedVariants,
    handleVariantChange,
    handleAddToCart,
    calculateDiscountedPrice,
    quantity,
    setQuantity
  };
};
