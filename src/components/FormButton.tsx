"use client";

import { useFormStatus } from "react-dom";
import { memo } from "react";

type Button = {
  title: string;
  variant: "primary";
  fn: Function | null;
  disabled: boolean;
};

const FormButton = ({ title, variant, fn, disabled }: Button) => {
  const status = useFormStatus();

  if (fn) {
    fn(status.pending);
  }

  return (
    <button
      disabled={status.pending || disabled}
      className={`${
        variant === "primary"
          ? "bg-yellow-500 text-slate-100 hover:text-slate-950"
          : null
      } group relative disabled:bg-slate-950 disabled:text-yellow-500 py-1 sm:py-2 w-44 text-[12px] sm:[16px] lg:text-xl font-RobotoMono duration-200 overflow-hidden z-10 border-2 border-slate-950`}
    >
      {status.pending ? "..." : title}
      {status.pending || disabled ? null : (
        <>
          <div className="w-0 h-0 bg-slate-50 bg-opacity-30 absolute right-0 bottom-0 duration-200 group-hover:size-full ease-out"></div>
          <div className="w-0 h-0 bg-green-700 bg-opacity-30 delay-100 absolute top-0 left-0 duration-100 group-hover:size-full ease-out"></div>
        </>
      )}
    </button>
  );
};

export default memo(FormButton);
