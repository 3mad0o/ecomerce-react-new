import React, { useState } from 'react';
import { Link } from "react-router";
import Modal from '../../../components/Modal';
import { AddProductToCartModal } from './AddProductToCartModal';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../redux/Wishlist/WishlistSlice';
import { MdFavoriteBorder } from 'react-icons/md';

export const ProductCard = ({ withoutAddToCart = false, product }) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    openModal();
  };

  const addToWishList = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToWishlist({ id: product.id }));
  };

  return (
    <>
      <Link
        to={`/product/${product.slug}`}
        className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all z-1"
      >
        <div className="w-full">
          <img
            src={product.main_image}
            alt={product.name}
            className="w-full object-cover object-top aspect-[230/230]"
          />
        </div>

        <div className="p-2 flex-1 flex flex-col">
          <div className="flex-1">
            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">
              {product.name}
            </h5>
            <p className="mt-1 text-gray-500 line-clamp-2 text-sm">
              {product.description}
            </p>

            <div className="flex flex-wrap justify-between gap-2 mt-2">
              <div className="flex gap-2 items-center">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </h6>

                {product.discount > 0 && (
                  <h6 className="text-sm sm:text-base text-gray-500">
                    <strike>${(product.price + product.discount).toFixed(2)}</strike>
                  </h6>
                )}
              </div>

              <div className="flex items-center gap-0.5">
                <svg
                  className="w-[14px] h-[14px] fill-black"
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <span className="text-xs text-gray-600">
                  {parseInt(product.reviews_rate_sum).toFixed(1)} ({product.reviews_count})
                </span>
              </div>
            </div>
          </div>

          {!withoutAddToCart && (
            <div className="flex items-center gap-2 mt-4">
              <button
                type="button"
                onClick={addToWishList}
                className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded"
                title="Wishlist"
              >
                <MdFavoriteBorder className="text-red-500" />
              </button>
              <button
                type="button"
                onClick={handleAddToCartClick}
                className="text-sm px-2 min-h-[36px] w-full bg-black hover:bg-blue-700 text-white tracking-wide rounded"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </Link>

      <Modal isOpen={isModalOpen && !withoutAddToCart} onClose={closeModal}>
        <AddProductToCartModal product={product} closeModal={closeModal} />
      </Modal>
    </>
  );
};
