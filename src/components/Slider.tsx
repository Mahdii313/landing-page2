"use client";

import { useState, useEffect, memo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SliderImages } from "@/data";
import Progressbar from "./Progressbar";

const Slider = () => {
  const [slideImage, setSlideImage] = useState(1);

  let timeoutHolder;
  let intervalHolder;
  let progress = 0;

  useEffect(() => {
    timeoutHolder = setTimeout(() => setSlideImage((s: number) => s + 1), 5000);
    intervalHolder = setInterval(() => {
      progress += 0.1;
    }, 5);
    return () => {
      clearTimeout(timeoutHolder!);
      clearInterval(intervalHolder!);
    };
  }, [slideImage]);

  useEffect(() => {
    if (slideImage > SliderImages.length) {
      setSlideImage(1);
    } else if (slideImage < 1) {
      setSlideImage(SliderImages.length);
    }
  }, [slideImage]);

  function handleProgress() {
    return progress;
  }

  return (
    <div className="group relative select-none w-full h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px]">
      <FaArrowLeft
        className="cursor-pointer text-slate-800 bg-slate-100 hover:bg-slate-300 duration-500 absolute top-1/2 -translate-x-1/2 left-7 rounded-full size-5 p-1 sm:size-7 sm:p-2 z-10"
        onClick={() => {
          setSlideImage((s: number) => s - 1);
        }}
      />
      <div
        className="w-full h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] bg-cover"
        style={{ backgroundImage: `url("/Slider/jungle${slideImage}.jpg")` }}
      ></div>
      <FaArrowRight
        className="cursor-pointer text-slate-800 bg-slate-100 hover:bg-slate-300 duration-500 absolute top-1/2 -translate-x-1/2 right-0 rounded-full size-5 p-1 sm:size-7 sm:p-2 z-10"
        onClick={() => {
          setSlideImage((s: number) => s + 1);
        }}
      />
      <Progressbar progress={0} fn={handleProgress} />
    </div>
  );
};

export default memo(Slider);
