"use client";

import NextImage from "next/image";
import { useState, useEffect } from "react";

type ImageComparisonSliderProps = {
  className?: string;
  srcBefore?: string;
  srcAfter?: string;
};

export default function Slider({
  srcBefore = "https://cdn.discordapp.com/attachments/1179870788640317562/1182708774683824290/before.png?ex=6585ae61&is=65733961&hm=cc6cd000a0d1c98aaafc6fcb395b9d37b90eeb9a7936bd45ef84836a9f39b636&",
  srcAfter = "https://cdn.discordapp.com/attachments/1179870788640317562/1182708774247600220/after.png?ex=6585ae61&is=65733961&hm=cdf1b1b5d8537e55ef1dc867828a0c18495b31a6cf82e94917a3c7932e670984&",
  className
}: ImageComparisonSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const image = new Image();
    image.onload = function () {
      setDimensions({ width: image.width, height: image.height });
    };
    image.src = srcAfter;
  }, [srcAfter]);

  const aspectRatio =
    dimensions.width && dimensions.height
      ? parseFloat((dimensions.width / dimensions.height).toFixed(3))
      : 0; // Calculate and round the aspect ratio

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`w-full relative h-full ${className}`} onMouseUp={handleMouseUp}>
      <div
        className={`relative w-full m-auto max-w-[1/2] h-full overflow-hidden select-none rounded-3xl`}
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          aspectRatio,
        }}
      >
        <NextImage alt="" className="max-w-none object-cover" fill priority src={srcAfter} />

        <div
          className="absolute top-0 left-0 right-0 w-full h-full m-auto overflow-hidden select-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            aspectRatio,
          }}
        >
          <NextImage fill priority className="max-w-none object-cover" alt="" src={srcBefore} />
        </div>
        <div
          className="absolute top-0 bottom-0 w-20 cursor-ew-resize items-center max-w-full"
          style={{
            left: `calc(${sliderPosition}% - 40px)`,
          }}
        >
          <div className={`absolute top-0 bottom-0 left-1/2 duration-1000 transition-colors transform -translate-x-1/2 w-3  ${
              isHovered ? "bg-fancy w-5" : "bg-white/50"
            }`}></div>
          <svg
            className={`relative top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 ${
              isHovered ? "scale-110 " : ""
            }`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2929 12.293L11.7071 13.7072L9.41421 16.0001L11.7071 18.293L10.2929 19.7072L6.58579 16.0001L10.2929 12.293Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.7071 19.7071L20.2929 18.2929L22.5858 16L20.2929 13.7071L21.7071 12.2929L25.4142 16L21.7071 19.7071Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className="absolute top-[10%] bottom-1/2 cursor-ew-resize items-center max-w-full space-x-20"
          style={{
            left: `calc(${sliderPosition}% - 129px)`,
          }}
        >
            <span className={`text-xl text-white p-4 rounded-full transition-all ${isHovered ? "bg-black/50 visible" : "invisible"}`}>Before</span>
            <span className={`text-xl text-white p-4 rounded-full transition-all ${isHovered ? "bg-black/50 visible" : "invisible"}`}>After</span>
        </div>
      </div>
    </div>
  );
}
