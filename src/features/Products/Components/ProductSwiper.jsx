import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ProductCard } from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ProductSwiper = ({ title, swiper, products, icon }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sampleProducts = [];

  return (
    <div className="product-swiper-wrapper">
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="text-lg font-semibold flex items-center gap-2">
          {title} {icon ?? null}
        </div>
        <div className="flex items-center gap-2">
          <button ref={prevRef} className="p-2 rounded-full hover:bg-gray-200">
            <FaArrowLeft />
          </button>
          <button ref={nextRef} className="p-2 rounded-full hover:bg-gray-200">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 1.3, // Mobile
          },
          640: {
            slidesPerView: 2.5, // Small tablets
          },
          768: {
            slidesPerView: 4, // Tablets
          },
          1024: {
            slidesPerView: 6, // Desktops
          },
        }}
        loop={true}
        pagination={false}
        scrollbar={false}
        centeredSlides={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="slider_item p-2">
              <ProductCard withoutAddToCart={true}product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
