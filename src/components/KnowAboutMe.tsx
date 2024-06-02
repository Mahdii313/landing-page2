import React from "react";

const KnowAboutMe = () => {
  return (
    <div>
      <div
        id="#knowAboutMe"
        className="group h-[150px] sm:h[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-b from-yellow-500 to-yellow-300 flex justify-center items-center flex-col tracking-wide font-Jaro2X cursor-default select-none px-2"
      >
        <div className="bgc text-center bg-gradient-to-b from-green-700 to-green-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl group-hover:tracking-widest duration-500 ease-out">
          Mahdi Rostami
        </div>
        <p className="text-slate-50 text-[10px] sm:text-lg md:text-xl lg:text-2xl font-RobotoMono border sm:border-2 border-slate-50 p-1 sm:p-2">
          Salam Aleykum, I am Mahdi Rostami, It is enough.
        </p>
      </div>
    </div>
  );
};

export default KnowAboutMe;
