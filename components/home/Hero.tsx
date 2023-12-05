import { motion, useAnimation } from "framer-motion";

import { pian } from "@/font/Fonts";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"
export default function Hero() {

  const videoURL = "https://cdn.discordapp.com/attachments/1179870788640317562/1181224828808745040/pexels-photo-415829.mp4?ex=65804859&is=656dd359&hm=848d0bc5e5a2e8d2f095b94e2cd21b5552133f16f2ff2edb96c31d399cc8cf10&"
  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center h-screen w-screen  ${pian.className}`}
    >
      <div className="">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      
      <button className="mt-10 text-4xl border-dashed border-black border-2 p-2">
        <div className="">前往</div>
      </button>
    </section>
  );
}
