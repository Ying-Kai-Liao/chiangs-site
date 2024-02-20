'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 190;
const CARD_HEIGHT = 190;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <div className="w-[44vw] max-w-[780px]" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-3xl">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </div>
  );
};

const Card = ({ url, category, title, description }: ItemType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/30 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className=" text-xl font-bold">{title}</p>
        {/* <p className="text-sm text-slate-300">{description}</p> */}
      </div>
    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274861612957767/1.png?ex=65e653fa&is=65d3defa&hm=10f25a8e0a30d093ac79e6b4e8ca1e01c52d67032af18d91549e368a4c45ff24&",
    category: "精選",
    title: "VA夥伴 蕾蕾",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274861852041296/2.png?ex=65e653fa&is=65d3defa&hm=30c8ccdff96d3bc84bf83d3a83d95d4d0de795fc134ed696b57f60211ca2adaf&",
    category: "精選",
    title: "VA夥伴 Jenny",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274862233718804/3.png?ex=65e653fa&is=65d3defa&hm=00603a8adb8da91f20a58c5ead0c143bbbecf2490747b997fd369d828bef48bc&",
    category: "精選",
    title: "VA夥伴 Angel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274862519193640/4.png?ex=65e653fa&is=65d3defa&hm=99fdb4200d4924db496ea58e096a1257b4d770636f7d172139a5395c18673e23&",
    category: "精選",
    title: "VA夥伴 James",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274862900871179/5.png?ex=65e653fa&is=65d3defa&hm=ba25d67db5c3438307f12ac863b3c390e4f4d4de948afccf62939b19bcef2331&",
    category: "精選",
    title: "VA夥伴 Snoey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    url: "https://cdn.discordapp.com/attachments/1204070917026881617/1209274863244673088/6.png?ex=65e653fa&is=65d3defa&hm=12e7021e9670450d4e78de2b6998ab4b926d1b6cc8bf8cf6d9a417d1f7ba7f7c&",
    category: "精選",
    title: "VA夥伴 怡婷",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  }
];