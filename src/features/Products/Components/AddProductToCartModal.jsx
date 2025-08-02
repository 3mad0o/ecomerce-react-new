import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, toggleCartSide } from "../../../redux/Cart/CartSlice";
import { Link } from "react-router";
import { useProductDeatils } from "../hooks/useProductDeatils";
import { Quantity } from "./Quantity";

export const AddProductToCartModal = ({ closeModal, slug }) => {
  const {
    isLoading,
    product,
    selectedImage,
    setSelectedImage,
    selectedVariants,
    handleVariantChange,
    handleAddToCart,
    calculateDiscountedPrice,
    quantity,
    setQuantity,
  } = useProductDeatils({ slug });

  return (
    <>
      <div className="font-sans">
        <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
            {/* Image Section */}
            <div className="w-full lg:sticky top-0 text-center">
              <div className="lg:h-[500px]">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="lg:w-11/12 w-full h-full rounded-md object-cover object-top"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-start mx-auto mt-4">
                {product?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`w-16 cursor-pointer rounded-md ${
                      selectedImage === image ? "outline outline-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {product?.name}
              </h2>

              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">
                  ${calculateDiscountedPrice()}
                </p>
                {product?.discount > 0 && (
                  <p className="text-gray-400 text-xl">
                    <strike>${product?.price}</strike>
                    <span className="text-sm ml-1.5">Tax included</span>
                  </p>
                )}
              </div>

              {/* Rating Display */}
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 ${
                      i <
                      Math.round(
                        (product?.reviews_rate_sum || 0) /
                          (product?.reviews_count || 1)
                      )
                        ? "fill-black"
                        : "fill-[#CED5D8]"
                    }`}
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.47 3.6L13.66 4.84L10.99 8.3L11.11 12.66L7 11.2L2.89 12.66L3.01 8.3L0.34 4.84L4.53 3.6L7 0Z" />
                  </svg>
                ))}
              </div>

              {/* Dynamic Attributes */}
              {product?.attributes?.map((attr) => (
                <div key={attr.id} className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    {attr.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {attr.values.map((val) => (
                      <button
                        key={val.id}
                        type="button"
                        className={`px-4 py-2 border-2 rounded-full ${
                          selectedVariants[attr.id] === val.id
                            ? "border-blue-600"
                            : "hover:border-blue-600"
                        }`}
                        onClick={() => handleVariantChange(attr.id, val.id)}
                      >
                        {val.value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full mt-8 px-6 py-3 bg-black hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
              >
                Add to cart
              </button>

              {/* Description */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  About the item
                </h3>
                {product?.description ? (
                  <p className="text-md text-gray-800 mt-2 ">
                    {product.description}
                  </p>
                ) : (
                  <p className="text-md text-gray-800 mt-2 ">no description</p>
                )}
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Reviews ({product?.reviews_count || 0})
                </h3>

                <Link
                  to={`/product/${slug}/reviews`}
                  className="w-full block text-center mt-4 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md"
                >
                  Read all reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};
