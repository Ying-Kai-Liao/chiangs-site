"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import i18n from "@/lib/i18n";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "En" | "Ch";

const ToggleLanguage = () => {
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const [selected, setSelected] = useState<ToggleOptionsType>("En");
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "En" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          changeLanguage("en");
          setSelected("En");
        }}
      >
        <span className="relative z-10">EN</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "Ch" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          changeLanguage("ch");
          setSelected("Ch");
        }}
      >
        <span className="relative z-10">CH</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "Ch" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-[#996168]"
        />
      </div>
    </div>
  );
};

export default ToggleLanguage;
