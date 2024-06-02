"use client";

import hire from "@/lib/hire";
import { useState } from "react";
import FormButton from "./FormButton";

const HireForm = () => {
  const [email, setEmail] = useState("");

  function handleInputs(pending: boolean) {
    if (pending) {
      setEmail("");
    }
  }

  return (
    <form action={hire}>
      <div className="border-2 border-slate-950 w-full h-fit flex items-center flex-row-reverse bg-yellow-500">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          className="text-slate-950 bg-transparent border-r-2 border-t-2 border-b-2 border-slate-950 focus:outline-none font-RobotoMono h-[30px] sm:h-11 lg:h-12 w-full px-2 font-semibold text-[10px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl"
          onChange={(e) => {
            if (e.target.value.length >= 1)
              e.target.value =
                e.target.value[0].toUpperCase() + e.target.value.slice(1);
            setEmail(e.target.value);
          }}
        />
        <FormButton
          title="Enter"
          fn={handleInputs}
          variant="primary"
          disabled={email.length <= 5}
        />
      </div>
    </form>
  );
};

export default HireForm;
