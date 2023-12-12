"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { pian } from "@/font/Fonts";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageSlider from "../../Diff";
import NewVideo from "@/components/Video";

const imageItemStyle = `
  max-w-[calc(33.3%-40px)] 
  m-[20px]
`;

const smallScreenStyle = `
  max-w-[calc(40%)]
  m-[5%]
`;

const videoJsOptions = {
  sources: [
    {
      src: "https://cdn.discordapp.com/attachments/1179870788640317562/1181224828808745040/pexels-photo-415829.mp4?ex=65804859&is=656dd359&hm=848d0bc5e5a2e8d2f095b94e2cd21b5552133f16f2ff2edb96c31d399cc8cf10&",
      type: "video/mp4",
    },
  ],
  width: 640, // Set the width to your desired value (e.g., 640 pixels)
  height: 360, // Set the height to your desired value (e.g., 360 pixels)
  fluid: false, // Disable fluid mode to use the specified dimensions
  autoplay: true, // Autoplay the video
  // poster: "https://cdn.discordapp.com/attachments/1179870788640317562/1180780399257993296/human.png?ex=657eaa71&is=656c3571&hm=3c6c154762cc407133fae00146f795ae46a22771e1a415ef8f0b9b5f46061f5f&", // Specify the URL of the preview image
  controlBar: {
    volumePanel: false, // Disable volume control
  },
  controls: false,
  fullscreenToggle: false, // Disable fullscreen functionality
  muted: true,
};

// const src= "https://cdn.discordapp.com/attachments/1179870788640317562/1181224828808745040/pexels-photo-415829.mp4?ex=65804859&is=656dd359&hm=848d0bc5e5a2e8d2f095b94e2cd21b5552133f16f2ff2edb96c31d399cc8cf10&"
const src= "/videos/demoVR.mp4"

export default function Hero() {
  const imageList = [
    { name: "Laura", src: "/Before.jpg" },
    { name: "Laura", src: "/Before.jpg" },
    { name: "Laura", src: "/Before.jpg" },
    { name: "Laura", src: "/Before.jpg" },
    { name: "Laura", src: "/Before.jpg" },
  ];

  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center w-screen ${pian.className}`}
    >
      <div className="w-full mx-auto ">
        <div className="flex justify-center flex-col bg-grid-slate-100">
          {/* <div className="flex flex-wrap flex-start justify-start items-center w-1/2 px-10">
            {imageList.map((image, index) => (
              <div
                key={index}
                className={`${conditionClass}`}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={width/6}
                  height={500}
                  className="rounded-[50%]"
                />
              </div>
            ))}
          </div> */}
          <aside className="flex justify-center items-center h-screen p-6 md:p-12">
            <ImageSlider className="max-w-[60%] max-h-[60%]"/>
          </aside>
          <div className="flex items-center justify-center">
            {/* <VideoHero src={src}/> */}
            <NewVideo src={src}/>
          </div>
        </div>
      </div>

      <button className="mt-10 text-4xl border-dashed border-black border-2 p-2">
        <div className="">前往</div>
      </button>
    </section>
  );
}
