'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FeaturedTech } from "@/app/lib/data";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Tooltip = ({ children, content }: { children: React.ReactNode, content: string }) => (
  <div className="relative group">
    {children}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 hidden group-hover:flex bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
      {content}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
    </div>
  </div>
);

export default function MyWorkSection() {
  const keys = Object.keys(FeaturedTech);

  return (
    <section id="my-tech" className="w-full my-20 px-4 flex justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={4}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
      >
        {keys.map((key) => (
          <SwiperSlide key={key}>
            <Tooltip content={FeaturedTech[key].name}>
              <div className="flex justify-center">
                <div className="min-w-[92px] h-[92px] lg:w-[128px] lg:h-[128px] rounded-md flex items-center justify-center bg-neutral-800/25 backdrop-blur-lg">
                  <a href={FeaturedTech[key].url} target="_blank" rel="noreferrer">
                    <svg
                      viewBox="0 0 24 24"
                      width="64"
                      height="64"
                      className="w-[75%] h-[75%] lg:w-full lg:h-full max-w-[64px] max-h-[64px] mx-auto"
                    >
                      <path d={FeaturedTech[key].icon.path} fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: red !important;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
        .swiper {
          padding-bottom: 40px;
        }
      `}</style>
    </section>
  );
}
