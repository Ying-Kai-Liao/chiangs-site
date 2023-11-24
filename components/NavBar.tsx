"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";

const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setIsVisible(currentScrollTop < lastScrollTop || currentScrollTop === 0);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header>
      <nav
        className={`backdrop-blur-sm bg-white/25 font-normal w-full fixed top-0 left-0 z-50 px-2 md:px-4 transition-transform duration-300 ${
          isVisible ? "transform-y-0" : "transform-y-0"
        }`}
      >
        <div className="container mx-auto max-w-[1170px] flex items-center font-small justify-between py-3 ">
          <Link href={"/"} className="w-[120px] md:w-[150px] py-3 md:py-2">
            LOGO
          </Link>
          <NavMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
