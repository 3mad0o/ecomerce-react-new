import React, { useState } from 'react';
import { Link } from "react-router";
import Modal from '../../../components/Modal';
import { AddProductToCartModal } from './AddProductToCartModal';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../redux/Wishlist/WishlistSlice';
import { MdFavoriteBorder } from 'react-icons/md';

export const ProductCard = ({withoutAddToCart =false}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();
  const images = [
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:0e3ea941-00d2-4b88-a575-dc854bc65277/as/AR-0355-5856-211_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:af7a614f-411b-41ff-9938-ba2d4521cd71/as/AR-0300-9593-639_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:e654b2e0-98ed-42ab-b400-b7ac93b6a840/as/AR-0366-5962-106_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:9e364030-9788-490a-a73b-46f105d93301/as/AR-3375-9975-300_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:70d9fd98-b6f0-4093-910e-030dab0ed6d2/as/AR-0153-2719-050_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:83e9042c-8b22-467d-ba67-e504eddd3d0e/as/AR-0181-4290-001_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:047e110c-2a94-42f6-82df-d043b45aca9b/as/AR-0181-4290-008_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:5c15a091-6779-4d09-954a-a1967d50ab51/as/AR-0116-7129-738_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:adbf4f60-59ed-4fd0-ac0a-b6a058977243/as/AR-0131-7808-040_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:22336225-fc1a-4275-88c8-3ba2b8ca8873/as/AR-0461-5132-237_2.jpg?width=450&height=577&preferwebp=true',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:22336225-fc1a-4275-88c8-3ba2b8ca8873/as/AR-0461-5132-237_2.jpg?width=450&height=577&preferwebp=true'
  ]

  const openModal = (product_id) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductDetails(null);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevent the link click from triggering
    e.preventDefault(); // Prevent the default action of the Link (navigation)
    openModal(1);
  };
  const addToWishList = (e) => {
    e.stopPropagation(); // Prevent the link click from triggering
    e.preventDefault(); // Prevent the default action of the Link (navigation)
    dispatch(addToWishlist({ id: 1 }));
  }

  return (
    <>
      <Link to={"/product/"+Math.random(1,10)} className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all z-1">
        <div className="w-full">
          <img src={images[Math.floor(Math.random() * images.length)]} alt="Product 1" className="w-full object-cover object-top aspect-[230/230]" />
        </div>

        <div className="p-2 flex-1 flex flex-col">
          <div className="flex-1">
            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">Lexicon Luxe</h5>
            <p className="mt-1 text-gray-500 truncate">Teal Green Georgette Saree with Embroidery</p>
            <div className="flex flex-wrap justify-between gap-2 mt-2">
              <div className="flex gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$10</h6>
                <h6 className="text-sm sm:text-base text-gray-500"><strike>$15</strike></h6>
              </div>
              <div className="flex items-center gap-0.5">
                {/* Stars */}
                <svg className="w-[14px] h-[14px] fill-black" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                {/* Add more stars as needed */}
              </div>
            </div>
          </div>
          {!withoutAddToCart &&<div className="flex items-center gap-2 mt-4">
            <button type='button' onClick={addToWishList} className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
             <MdFavoriteBorder className='text-red-500' />

            </button>
            <button
              type="button"
              onClick={handleAddToCartClick}
              className="text-sm px-2 min-h-[36px] w-full bg-black hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
            >
              Add to cart
            </button>
          </div>}
        </div>
      </Link>

      <Modal isOpen={isModalOpen && !withoutAddToCart} onClose={closeModal}>
        {/* {productDetails && <AddProductToCartModal />} */}
        <AddProductToCartModal closeModal={closeModal} />
      </Modal>
    </>
  );
};
