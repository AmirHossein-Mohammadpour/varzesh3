'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import { useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';

import type { NewsType } from '@/_lib/types';


const Slider = ({ news, sliderType }: { news: NewsType, sliderType: ('main' | 'secondary') }) => {
  const filteredNews =
    sliderType === 'main'
      ? news.filter(nou => nou.include1stBanner)
      : news.filter(nou => nou.include2ndBanner);
  const swiperRef = useRef<null | SwiperType>(null);
  const [slideNum, setSlideNum] = useState(0);

  return (
    <div className={`@container/slider`}>
      <Swiper
        modules={[Autoplay]}
        onSwiper={swiper => swiperRef.current = swiper}
        onSlideChange={swiper => setSlideNum(swiper.realIndex)}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`bg-black light:bg-white rounded`}
      >
        {filteredNews?.map(nou => (
          <SwiperSlide key={nou.id}>
            <div className={`flex flex-col @lg/slider:flex-row`}>
              <div className={`flex-1 relative aspect-7/5`}>
                <Image src={nou.imageURL} alt={nou.title} fill sizes={`500px`} loading="eager" className={`object-fill`} />
                <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2">
                  <button className={`${sliderType === 'main' ? 'bg-black light:bg-white' : 'bg-black/50'} p-1 rounded-l`} onClick={() => { swiperRef.current?.slideNext() }}>
                    <ChevronRight color={'#00838f'} />
                  </button>
                  <button className={`${sliderType === 'main' ? 'bg-black light:bg-white' : 'bg-black/50'} p-1 rounded-r`} onClick={() => { swiperRef.current?.slidePrev() }}>
                    <ChevronLeft color={'#00838f'} />
                  </button>
                </div>
              </div>
              <div className={`${sliderType === 'main' ? 'flex-1' : 'flex-3'}`}>
                <Link href={`news/${nou.id}`} className={`flex flex-col gap-2 p-2 mb-5`}>
                  {sliderType === 'main' && <p className={`text-xs font-light`}>{nou.subTitle}</p>}
                  <h2 className={`${sliderType === 'main' && 'text-lg'} font-bold`}>{nou.title}</h2>
                  <p className={`text-xs`}>{nou.miniDescription}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`absolute bottom-1 left-[50%] ${sliderType === 'main' ? '@lg/slider:left-[25%]' : '@lg/slider:left-[37.5%]'} translate-x-[-50%] flex flex-row-reverse gap-1 z-50`}>
          {filteredNews?.map((nou, index) => {
            return (
              <button
                key={nou.id}
                className={`${index === slideNum ? 'bg-primary' : 'bg-[#90a4ae]'} w-5 h-5 rounded text-white flex justify-center items-center cursor-pointer p-1 text-xs`}
                onClick={() => { swiperRef.current?.slideToLoop(index) }}
              >
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