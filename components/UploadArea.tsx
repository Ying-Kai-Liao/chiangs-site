"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import FileUpload from "./FileUpload";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className="px-8 py-12 ">
      <div className="w-[70vw] mx-auto gap-8 ">
        <div>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  index: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: open ? "840px" : "300px",
        }}
        className="p-6 rounded-[7px] bg-slate-700 flex flex-col justify-between  relative z-20"
      >
        <div className="flex flex-col items-center justify-center ">
          <Image src="/upload_bg.png" alt="uploadBG" width={800} height={640} />
        </div>
        <div>
          {/* <motion.p
            initial={false}
            animate={{
              color: open ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
          >
            {title}
          </motion.p> */}
          {/* <motion.p
            initial={false}
            animate={{
              opacity: open ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-slate-600 to-slate-600 bg-clip-text text-transparent"
          >
            {description}
          </motion.p> */}
        </div>
        {/* <motion.button
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button> */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
          }}
        >
          <FileUpload />
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-slate-600 to-slate-600"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "Individuals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
    imgSrc:
      "https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  //   {
  //     id: 2,
  //     title: "Startups",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
  //     imgSrc:
  //       "https://media3.giphy.com/media/3oz8xR9wKr8TaazlQc/giphy.gif?cid=ecf05e47izzshtedbk9y9dv6f5yvdsbakp7tth2n58vsdd7p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  //   },
  //   {
  //     id: 3,
  //     title: "Enterprise",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?",
  //     imgSrc:
  //       "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  //   },
];
