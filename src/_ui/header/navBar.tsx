"use client";

import { Menu, MenuIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavBarProps = {
  navs: { name: string; url: string }[];
  logo: StaticImport;
};

const NavBar = ({ navs, logo }: NavBarProps) => {
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

  return (
    <nav ref={nav} className={`@container/navBar`}>
      <div>
        {navWidth < 768 && (
          <div className={``}>
            <button
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <MenuIcon />
            </button>
            <Link href={"#"}>
              <Image src={logo} alt="ورزش ۳" priority />
            </Link>
          </div>
        )}
        {(isMenuOpen || navWidth >= 768) && (
          <div onClick={()=>{setIsMenuOpen(false)}} className={``}>
            <ul
              onClick={(e)=>{e.stopPropagation()}}
              className={``}
            >
              <li>
                <Link href={"#"}>
                  <Image src={logo} alt="ورزش ۳" priority />
                </Link>
              </li>
              {navs.map((nav, index, navs) => {
                return (
                  <li key={index}>
                    <Link href={nav.url}>{nav.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;