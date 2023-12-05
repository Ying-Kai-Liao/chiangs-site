import { motion, useAnimation } from "framer-motion";
import Video from 'next-video';

import { pian } from "@/font/Fonts";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"
export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center h-screen w-screen  ${pian.className}`}
    >
      <div className="">
        <Video src={} />
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      
      <button className="mt-10 text-4xl border-dashed border-black border-2 p-2">
        <div className="">前往</div>
      </button>
    </section>
  );
}
