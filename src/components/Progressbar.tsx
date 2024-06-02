"use client";

import { useEffect, useRef } from "react";

const Progressbar = ({ progress, fn }: { progress: number; fn: Function }) => {
  const progressBar = useRef<HTMLDivElement>(null);

  let intervalHolder;
  useEffect(() => {
    intervalHolder = setInterval(() => {
      if (progressBar && progressBar.current) {
        progress = fn();
        progressBar.current.style.width = `${progress}%`;
      }
    }, 5);
    return () => clearInterval(intervalHolder!);
  });
  return (
    <div className="w-full h-1 absolute bottom-0 left-0 bg-red-950">
      <div
        ref={progressBar}
        style={{ width: `${progress}%` }}
        className="bg-red-500 h-1 rounded-r-full"
      ></div>
    </div>
  );
};

export default Progressbar;
