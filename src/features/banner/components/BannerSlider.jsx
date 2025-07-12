import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const BannerSlider = ({banners}) => {
    const itemsToShow =[1,1,1,1];
  return (
      <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={false}
            scrollbar={false}
            centeredSlides={true}
            autoplay={true}
          >
            {itemsToShow.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="slider_item p-2">
                    <img className='w-full h-28 md:h-60 lg:h-80  object-cover'
                     src='https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  )
}
