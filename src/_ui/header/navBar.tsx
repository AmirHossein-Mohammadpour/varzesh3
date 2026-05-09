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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setNavWidth(entries[0].borderBoxSize[0].inlineSize);
    });
    if (nav.current) {
      observer.observe(nav.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMenuOpen]);

  return (
    <nav ref={nav} className={`@container/navBar px-2 py-3 bg-black light:bg-white`}>
        {navWidth < 992 && (
          <div className={`flex gap-2`}>
            <button onClick={() => {setIsMenuOpen(true)}}>
              <Menu className={`light:text-neutral-600`}/>
            </button>
            <Link href={"#"}>
              <Image src={logo} alt="ورزش ۳" priority />
            </Link>
          </div>
        )}
        {(isMenuOpen || navWidth >= 992) && (
          <div onClick={()=>{setIsMenuOpen(false)}} className={`${(navWidth < 992) ? "fixed inset-0 bg-white/50 light:bg-black/50" : ""}`}>
            <ul
              onClick={(e)=>{e.stopPropagation()}}
              className={
                `flex ${(navWidth < 992) ? "relative w-4/5 max-w-80 h-full p-4 overflow-auto flex-col" : "flex-row items-center"}
                 text-sm font-medium bg-black light:bg-white text-[#dedede] light:text-[#212121]`
              }
            >
              <h2 className={`${(navWidth < 992) ? "":"px-2"}`}>
                <Link href={"#"}>
                  <Image src={logo} alt="ورزش ۳" priority />
                </Link>
              </h2>
              <hr className={`mt-4 mb-2 text-neutral-800 light:text-neutral-300`}/>
              {navs.map((nav, index) => {
                return (
                  <li key={index} className={`${(navWidth < 992) ? "py-2" : "px-2"} flex flex-col items-stretch ${(["جدول لیگ برتر", "جام جهانی"].includes(nav.name)) && "text-red-600"}`}>
                    <Link href={nav.url}>{nav.name}</Link>
                  </li>
                );
              })}
              {
                <>
                  <h2 className={`${(navWidth < 992) ? "py-2":"px-2"}`}>سرویس‌ها</h2>
                  <hr className={`mt-4 mb-2 text-neutral-800 light:text-neutral-300`}/>
                  {anotherNav?.map((nav, index) => {
                    return(
                      <li key={index} className={`${(navWidth < 992) ? "py-2" : "px-2"} flex flex-col items-stretch`}>
                        <Link href={nav.url}>{nav.name}</Link>
                      </li>
                    );
                  })}
                </>
              }
            </ul>
          </div>
        )}
    </nav>
  );
};

export default NavBar;