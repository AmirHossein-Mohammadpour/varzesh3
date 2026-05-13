"use client";

import { Menu } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavBarProps = {
  navs: { name: string; url: string }[];
  anotherNav?: { name: string; url: string }[];
  logo: StaticImport;
};

const NavBar = ({ navs, logo, anotherNav }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if(isMenuOpen){document.body.style.overflow = "hidden"};
    if(!isMenuOpen){document.body.style.overflow = "unset"}
  }, [isMenuOpen]);

  return (
    <div className={`@container/navBar `}>
      <nav className={`p-2 @4xl/navBar:py-3.5 flex items-center gap-2 bg-black light:bg-white shadow-sm shadow-white/50 light:shadow-black/50`}>
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className={`@4xl/navBar:hidden flex justify-center items-center`}
        >
          <Menu className={` text-white/50 light:text-black/50`}/>
        </button>
        <Link href={`/`}>
          <Image src={logo} alt="ورزش ۳" loading="eager" />
        </Link>
        {isMenuOpen && (
          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={`fixed inset-0 bg-white/25 light:bg-black/50`}
          >
            <div
              onClick={(e) => {e.stopPropagation()}}
              className={
                `relative w-4/5 max-w-80 h-full p-4 flex flex-col gap-15 overflow-auto
                text-sm font-medium bg-black light:bg-white text-[#dedede] light:text-[#212121]
                animate-SiderBarOpening`
              }
            >
              <ul className={`flex flex-col gap-5`}>
                <h2>
                  <Image src={logo} alt="ورزش ۳" />
                </h2>
                <hr className={`mt-4 mb-2 text-neutral-800 light:text-neutral-300`} />
                {navs.map((nav, index) => {
                  return (
                    <li key={index} className={`flex flex-col ${(["جدول لیگ برتر", "جام جهانی"].includes(nav.name)) && "text-red-600"} hover:text-primary`}>
                      <Link href={nav.url}>{nav.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className={`flex flex-col gap-5`}>
                <h2 className={`text-base font-bold`}>سرویس ها</h2>
                <hr className={`mt-4 mb-2 text-neutral-800 light:text-neutral-300`} />
                {anotherNav?.map((nav, index) => {
                  return(
                    <li key={index} className={`flex flex-col`}>
                      <Link href={nav.url}>{nav.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        <ul className={`hidden @4xl/navBar:flex gap-3 text-sm font-medium`}>
          {navs.map((nav, index) => {
            return(
              <li key={index} className={`${(["جدول لیگ برتر", "جام جهانی"].includes(nav.name)) && "text-red-600"} hover:text-primary`}>
                <Link href={nav.url}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
