import Link from "next/link";
import { services } from "@/_lib/navBars";
import { Calendar, Search, User } from 'lucide-react';

const Services = () => {
  return (
    <div className={`@container/services`}>
      <div className={`h-7.5 px-2 py-1.5 flex justify-end @4xl/services:justify-between text-[11px] font-normal bg-primary text-white`}>
        <ul className={`hidden @4xl/services:flex gap-3`}>
          {services.map((service, index) => {
            return (
              <li key={index}>
                <Link href={service.url}>{service.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={`flex gap-3`}>
          <span className={`flex items-center gap-1`}>
            <Calendar size={16} strokeWidth={3}/>
            <div>چهارشنبه ۲۳ اردیبهشت - ۰۸:۴۵</div>
          </span>
          <span className={`flex items-center gap-1 border-x px-2 border-white/50`}>
            <Search size={16} strokeWidth={3}/>
            <div>جستجو</div>
          </span>
          <span className={`flex items-center gap-1`}>
            <User size={16} strokeWidth={3} fill="white"/>
            <div>ورود</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;