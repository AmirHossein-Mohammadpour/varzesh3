'use client'

import { NewsType } from "@/_lib/types";
import { Text } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NewsBar = ({news}: {news: NewsType}) => {
  const [order, setOrder] = useState<'releaseTime' | 'views' | 'comments'>('releaseTime');
  const [filter, setFilter] = useState({
    inside: true,
    outside: true,
    video: true
  });

  const orderedNews = [...news, ...news, ...news, ...news]; //This is just for make more news.
  // if(order === 'releaseTime'){orderedNews.sort((nou1, nou2) => (nou1.releaseTime - nou2.releaseTime))};
  if(order === 'views'){orderedNews.sort((nou1, nou2) => (nou1.views - nou2.views))};
  if(order === 'comments'){orderedNews.sort((nou1, nou2) => (nou1.comments - nou2.comments))};

  const displayNews = orderedNews.filter(nou => (filter[nou.scope]));

  return (
    <div className={`flex flex-col self-stretch h-200`}>
      <div className={`flex justify-between text-sm text-[#888]`}>
        <span 
          className={`border-b-2 ${order === 'releaseTime' && 'text-primary font-bold'} flex-1 flex justify-center items-center py-4 px-2 cursor-pointer`} 
          onClick={() => setOrder('releaseTime')}
        >
          جدیدترین‌ها
        </span>
        <span 
          className={`border-b-2 ${order === 'views' && 'text-primary font-bold'} flex-1 flex justify-center items-center py-4 px-2 cursor-pointer`} 
          onClick={() => setOrder('views')}
        >
          پر‌بازدید‌ترین‌ها
        </span>
        <span 
          className={`border-b-2 ${order === 'comments' && 'text-primary font-bold'} flex-1 flex justify-center items-center py-4 px-2 cursor-pointer`} 
          onClick={() => setOrder('comments')}
        >
          پر‌بحث‌ترین‌ها
        </span>
      </div>
      <div className={`flex justify-between items-center py-3 px-10`}>
        <div className={`flex items-center gap-1 font-bold text-sm`}>
          <input type="checkbox" id={`inside`} checked={filter.inside} onChange={e => {setFilter({...filter, inside: e.target.checked})}}/>
          <label htmlFor="inside">داخلی</label>
        </div>
        <div className={`flex items-center gap-1 font-bold text-sm`}>
          <input type="checkbox" id={`outside`} checked={filter.outside} onChange={e => {setFilter({...filter, outside: e.target.checked})}}/>
          <label htmlFor="outside">خارجی</label>
        </div>
        <div className={`flex items-center gap-1 font-bold text-sm`}>
          <input type="checkbox" id={`video`} checked={filter.video} onChange={e => {setFilter({...filter, video: e.target.checked})}}/>
          <label htmlFor="video">ویدیو</label>
        </div>
      </div>
      <div className={`overflow-auto p-1 flex flex-col gap-3`}>
        {displayNews.map((nou, index) => (
          <Link href={`/news/${nou.id}`} key={index} className={`flex items-center gap-1`}>
            <Text size={16}/>
            <p>{nou.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsBar;