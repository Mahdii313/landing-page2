"use client";

import { ServicesCards } from "@/data";
import ServiceCard from "./ServiceCard";
import { useRef } from "react";

const Services = () => {
  const header = useRef<HTMLHeadingElement>(null);

  function handleHeaderColor(color: string) {
    if (header) {
      if (color) {
        header.current!.style.color = color;
        header.current!.classList.remove("drop-shadow-yellow");
        removeHeaderShadows();
        header.current!.classList.add(`drop-shadow-${color}`);
      } else {
        removeHeaderShadows();
        header.current!.classList.add("drop-shadow-yellow");
        header.current!.style.color = "rgb(234 179 8)";
      }
    }
  }

  function removeHeaderShadows() {
    if (header.current!.classList.contains("drop-shadow-red"))
      header.current!.classList.remove("drop-shadow-red");
    else if (header.current!.classList.contains("drop-shadow-green"))
      header.current!.classList.remove("drop-shadow-green");
    else header.current!.classList.remove("drop-shadow-blue");
  }

  return (
    <div>
      <h1
        ref={header}
        className="text-center text-yellow-500 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px] font-Jaro2X tracking-widest drop-shadow-yellow transition-all duration-300 select-none"
      >
        Services
      </h1>
      <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-36 2xl:mt-52 flex items-center justify-evenly flex-col md:flex-row gap-5 md:gap-0">
        {ServicesCards.map((card) => (
          <ServiceCard key={card.id} fn={handleHeaderColor} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
