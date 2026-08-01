"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import newsPapers from "@/_lib/newsPapers";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsPaper = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.goRight',
          prevEl: '.goLeft',
        }}
        autoplay
        loop
        className={`relative`}
      >
        {newsPapers.map((item) => (
          <SwiperSlide>
            <div className={`flex flex-col items-center gap-2`}>
              <div className={``}>
                <Image
                  src={item.imageURL}
                  alt={item.name}
                  width={600}
                  height={400}
                  className={`w-full aspect-3/2 object-fill`}
                />
              </div>
              <p className={`text-lg font-bold`}>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={`absolute top-1/2 -translate-y-1/2 z-100 w-full flex justify-between`}>
          <span className={`goRight bg-black/50 p-1 text-primary cursor-pointer`}><ChevronRight/></span>
          <span className={`goLeft bg-black/50 p-1 text-primary cursor-pointer`}><ChevronLeft/></span>
        </div>
      </Swiper>
    </div>
  );
};

export default NewsPaper;
