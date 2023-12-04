import { motion, useAnimation } from "framer-motion";
import TextAnim from "./TextAnim";

import { pian } from "@/font/Fonts";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center h-screen w-screen bg-slate-300 ${pian.className}`}
    >
      <div className={`${pian.className} text-6xl`}>
        <TextAnim input="開始創建虛擬人" />
      </div>
      <button className="mt-10 text-4xl border-dashed border-black border-2 p-2">
        <div className="">前往</div>
      </button>
    </section>
  );
}
