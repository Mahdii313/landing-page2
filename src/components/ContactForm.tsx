"use client";

import FormButton from "./FormButton";
import contact from "@/lib/contact";
import { MdOutlineSubject } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function handleInputs(pending: boolean) {
    if (pending) {
      setSubject("");
      setBody("");
    }
  }

  return (
    <form
      action={contact}
      className="z-10 w-full h-full flex flex-col justify-evenly items-center"
    >
      <div className="flex flex-col items-center gap-2 sm:gap-5 z-10 w-full">
        <div className="border-2 border-slate-950 w-3/4 sm:w-full lg:w-3/4 xl:w-2/3 h-7 sm:h-10 px-2 flex items-center gap-2">
          <MdOutlineSubject className="text-2xl sm:text-4xl" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            maxLength={18}
            value={subject}
            className="text-slate-950 bg-transparent focus:outline-none font-RobotoMono h-full w-full font-semibold text-[18px] sm:text-[11px] md:text-[14px] lg:text-[17px] xl:text-xl"
            onChange={(e) => {
              if (e.target.value.length >= 1)
                e.target.value =
                  e.target.value[0].toUpperCase() + e.target.value.slice(1);
              setSubject(e.target.value);
            }}
          />
        </div>
        <textarea
          value={body}
          name="body"
          maxLength={250}
          onChange={(e) => {
            if (e.target.value.length >= 1)
              e.target.value =
                e.target.value[0].toUpperCase() + e.target.value.slice(1);
            setBody(e.target.value);
          }}
          placeholder="Type your message"
          className="border-2 border-slate-950 p-2 resize-none focus:outline-none bg-yellow-500 w-3/4 sm:w-full lg:w-3/4 xl:w-2/3 text-[14px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-base font-RobotoMono h-28 sm:h-52 md:h-60 lg:h-80 xl:h-96"
        />
      </div>
      <FormButton
        title="Submit"
        variant="primary"
        fn={handleInputs}
        disabled={subject.length === 0 || body.length === 0}
      />
    </form>
  );
};

export default ContactForm;
