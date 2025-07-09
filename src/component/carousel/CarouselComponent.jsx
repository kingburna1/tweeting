import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styless.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';

const CarouselComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="relative group">
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={true}
        loop={true}   
        pagination={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}
      >
        <SwiperSlide>
          <SlideCard name="Alexender Alex" role="Founder" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard name="Melisa Smith" role="Director" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard name="Theo Lee" role="CEO" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard name="Rose Amlry" role="Product Manager" />
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 left-0 z-10" />
      <div className="swiper-button-next hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 right-0 z-10" />
    </div>
  );
};

const SlideCard = ({ name, role }) => (
  <div>
    <div className="relative bg-gray-100 text-gray-800 p-6 rounded-md w-fit max-w-md">
      <p className="text-sm">
        Praesent eget porttitor lectus. Integer molestie vehicula porttitor.
        In vehicula, ante at lacinia, lorem augue sodales vestibulum arcu justo.
      </p>
      <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
    </div>

    <div className="flex gap-4 mt-6">
      <img
        className="w-20 h-20 rounded-full"
        src="https://psychedelicsawarenessshop.com/wp-content/uploads/2019/10/team-client-480-placeholder-300x300.jpg"
        alt={name}
      />
      <div>
        <h3 className="text-md font-semibold text-gray-700">{name}</h3>
        <p className="mt-2 text-sm text-gray-600">{role}</p>
        <div>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="inline-block text-yellow-300"
              size={16}
              fill="yellow"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CarouselComponent;
