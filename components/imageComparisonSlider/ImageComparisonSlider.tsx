"use client";
import NextImage from "next/image";
import { useState, useRef, useEffect } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import useWindowWidth from "@/hooks/useWindowWidth";
import useWindow from "@/hooks/useWindow";
import "./slider.css";

type ImageComparisonSliderProps = {
  srcBefore?: string;
  srcAfter?: string;
};
// slider-example-focus

export default function ImageComparisonSlider({
  srcBefore = "https://cdn.discordapp.com/attachments/1179870788640317562/1182708774683824290/before.png?ex=6585ae61&is=65733961&hm=cc6cd000a0d1c98aaafc6fcb395b9d37b90eeb9a7936bd45ef84836a9f39b636&",
  srcAfter = "https://cdn.discordapp.com/attachments/1179870788640317562/1182708774247600220/after.png?ex=6585ae61&is=65733961&hm=cdf1b1b5d8537e55ef1dc867828a0c18495b31a6cf82e94917a3c7932e670984&",
}: ImageComparisonSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height } = useWindow();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const image = new Image();
    image.onload = function () {
      setDimensions({ width: image.width, height: image.height });
    };
    image.src = srcAfter;
  }, [srcAfter]);
  console.log(isHovered);
  return (
    <div
      className="h-full w-full object-cover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImgComparisonSlider className="focus:shadow-lg focus:outline-muted coloured-slider h-full w-full object-cover">
        <div slot="first" className="before">
          <NextImage
            width={
              ((width / 2) * dimensions.height) / dimensions.width < height
                ? (height / dimensions.height) * dimensions.width
                : width / 2
            }
            height={100}
            alt="flower"
            src={srcBefore}
            className={`focus:outline-muted max-w-none`}
          />
          {/* <div className={`w-full h-full`} style={{backgroundImage:'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)'}}></div> */}
          {/* <figcaption>Before</figcaption> */}
        </div>
        <div className="after" slot="second">
          <NextImage
            width={
              ((width / 2) * dimensions.height) / dimensions.width < height
                ? (height / dimensions.height) * dimensions.width
                : width / 2
            }
            height={2000}
            alt="flower"
            src={srcAfter}
            className={`focus:outline-muted max-w-none bg-right`}
          />
          {/* <figcaption>After</figcaption> */}
        </div>
        {/* <svg
          slot="handle"
          className={`custom-animated-handle duration-300 ${
            isHovered ? "scale-110 " : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          viewBox="-8 -3 16 6"
        >
          <path
            stroke="#fff"
            d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
            strokeWidth="1"
            fill="#fff"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg> */}
        <svg
          slot="handle"
          className={`custom-animated-handle duration-300 ${
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2929 12.293L11.7071 13.7072L9.41421 16.0001L11.7071 18.293L10.2929 19.7072L6.58579 16.0001L10.2929 12.293Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.7071 19.7071L20.2929 18.2929L22.5858 16L20.2929 13.7071L21.7071 12.2929L25.4142 16L21.7071 19.7071Z"
            fill="black"
          />
        </svg>
      </ImgComparisonSlider>
    </div>
  );
}
