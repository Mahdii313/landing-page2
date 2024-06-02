"use client";

import { NavbarItems } from "../data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import Slider from "./Slider";

const Navbar = () => {
  let menuItems = [];
  // for (let i = 0; i < NavbarItems.length; i++) {
  menuItems[0] = useRef<HTMLDivElement>(null);
  menuItems[1] = useRef<HTMLDivElement>(null);
  menuItems[2] = useRef<HTMLDivElement>(null);
  menuItems[3] = useRef<HTMLDivElement>(null);
  menuItems[4] = useRef<HTMLDivElement>(null);
  // }

  const nav = useRef<HTMLElement>(null);
  const navHeader = useRef<HTMLHeadingElement>(null);
  const stickyNav = useRef<HTMLDivElement>(null);

  const [showStickyNav, setShowStickyNav] = useState(false);

  const [showDescription, setShowDescription] = useState<string>(null!);

  let navBottom;
  let menuItemHeight;
  let navHeaderBottom;
  let whenStickyOpen;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    menuItemHeight = menuItems[0].current?.getBoundingClientRect().height;
    navHeaderBottom = navHeader.current?.getBoundingClientRect().bottom;
    navBottom = nav.current?.getBoundingClientRect().bottom;
    if (window.innerWidth < 640) {
      whenStickyOpen = 140;
    } else if (window.innerWidth < 768) {
      whenStickyOpen = 160;
    } else {
      whenStickyOpen = 250;
    }
    window.addEventListener("scroll", () => {
      for (let item of menuItems) {
        if (item && item.current) {
          if (scrollY >= item.current.offsetTop) {
            item.current.classList.add("sticky");
            item.current.classList.add("top-0");
          } else {
            item.current.classList.remove("sticky");
            item.current.classList.remove("top-0");
          }
        }
      }

      if (scrollY < navHeaderBottom! - menuItemHeight!) {
        navHeader.current?.classList.remove("sticky");
        navHeader.current?.classList.remove("top-0");
        navHeader.current?.classList.remove(`h-[${menuItemHeight!}px]`);
        navHeader.current?.classList.add("h-[200px]");
        navHeader.current?.classList.add("md:h-[300px]");
        navHeader.current?.classList.add("xl:h-[400px]");
      } else {
        navHeader.current?.classList.add("sticky");
        navHeader.current?.classList.add("top-0");
        navHeader.current?.classList.add(`h-[${menuItemHeight!}px]`);
        navHeader.current?.classList.remove("h-[200px]");
        navHeader.current?.classList.remove("md:h-[300px]");
        navHeader.current?.classList.remove("xl:h-[400px]");
        setShowDescription(null!);
      }

      if (scrollY >= navBottom! - menuItemHeight! + whenStickyOpen!) {
        if (!showStickyNav) {
          stickyNav.current?.classList.remove("animate__slideOutUp");
          stickyNav.current?.classList.add("animate__slideInDown");
          setShowStickyNav(true);
        }
      }

      if (scrollY < navBottom! - menuItemHeight! + whenStickyOpen!) {
        if (!showStickyNav) {
          setShowStickyNav(false);
        }
      }
    });
  }, []);

  function checkNavHeaderIsSticky() {
    return navHeader.current?.classList.contains("sticky");
  }

  return (
    <>
      <nav
        ref={nav}
        className="bg-gradient-to-b h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] flex justify-center items-center px-6"
      >
        <header
          ref={navHeader}
          className="h-[200px] md:h-[300px] xl:h-[400px] w-5/6 flex justify-between z-10"
        >
          {NavbarItems.map((item, index) => (
            <div
              ref={menuItems[index]}
              key={item.id}
              className={`${
                item.id % 2 === 0 ? "self-end" : "self-start"
              } font-Jaro2X relative py-6`}
            >
              <h2
                className="bgc text-[12px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl bg-gradient-to-b from-yellow-500 to-yellow-300 bg-clip-text text-transparent hover:text-yellow-300 duration-500 cursor-pointer border-yellow-300 border-b sm:border-b-2 md:border-b-4"
                onMouseEnter={() => setShowDescription(item.title)}
                onMouseLeave={() => setShowDescription(null!)}
              >
                <Link href={item.link!}>{item.title}</Link>
              </h2>
              {showDescription == item.title && !checkNavHeaderIsSticky() && (
                <p className="animate__animated animate__fadeIn absolute top-12 sm:top-16 md:top-[72px] lg:top-20 xl:top-[90px] 2xl:top-24 text-[6px] sm:text-[8px] md:text-[10px] lg:text-[16px] font-RobotoMono min-w-16 sm:min-w-20 md:min-w-24 lg:min-w-[150px] xl:min-w-[190px] bg-gray-950 text-green-500 bg-opacity-65 border border-gray-700 p-1 md:p-2 tracking-tighter rounded-md">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </header>
        <div className="absolute top-0 left-0 h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] w-full">
          <Slider />
        </div>
      </nav>
      {/* **************************** sticky navigation bar **************************** */}
      {showStickyNav && (
        <div
          ref={stickyNav}
          className="animate__animated animate__slideInDown animate__faster bg-gradient-to-b from-black to-slate-900 h-[50px] sm:h-[70px] md:h-[100px] flex justify-between items-center sticky top-0 px-3 sm:px-6 z-50"
        >
          <Link
            href={"/"}
            className="animate__animated animate__zoomIn animate__delay-1s py-6"
          >
            <Image
              src={"/logo.png"}
              width={54}
              height={54}
              alt="logo"
              className="w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16"
            />
          </Link>
          <header className="flex w-11/12 sm:w-5/6 justify-between">
            {NavbarItems.map((item) => (
              <div key={item.id} className="font-Jaro2X py-6">
                <h2 className="bgc text-[13px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl bg-gradient-to-b from-yellow-500 to-yellow-300 bg-clip-text text-transparent hover:text-yellow-300 duration-500 cursor-pointer">
                  {item.title}
                </h2>
              </div>
            ))}
          </header>
        </div>
      )}
    </>
  );
};

export default Navbar;
