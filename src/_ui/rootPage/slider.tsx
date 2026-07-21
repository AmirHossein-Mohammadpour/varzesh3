'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import news from '@/_lib/news';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className={`@container/slider`}>
      <Swiper
        loop
        className={`bg-black light:bg-white rounded relative`}
      >
        {news.filter(nou => nou.include1stBanner).map(nou => (
          <SwiperSlide key={nou.id}>
            <div className={`flex flex-col @lg/slider:flex-row`}>
              <div className={`flex-1`}>
                <Image src={nou.imageURL} alt={nou.title} width={800} height={571} loading="eager" className={`object-fill`} />
              </div>
              <div className={`flex-1 p-2 pb-10`}>
                <Link href={nou.newsURL()} className={`flex flex-col gap-2`}>
                  <p className={`text-xs font-light`}>{nou.subTitle}</p>
                  <h2 className={`text-lg font-bold`}>{nou.title}</h2>
                  <p className={`text-xs`}>{nou.miniDescription}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`absolute bottom-1 left-[50%] @lg/slider:left-[25%] translate-x-[-50%] flex flex-row-reverse gap-1`}>
          {news.filter(nou => nou.include1stBanner).map((nou, index) => {
            return (
              <button key={nou.id} className={`bg-[#90a4ae] w-5 h-5 rounded text-white flex justify-center items-center cursor-pointer p-1 text-xs`}>
                {index + 1}
              </button>
            );
          })}
        </div>
      </Swiper>
    </div>
  )
}

export default Slider;

