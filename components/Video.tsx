'use client'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type VideoProps = {
  src: string;
  className?: string;
};

export default function NewVideo({
  src = "https://cdn.discordapp.com/attachments/1179870788640317562/1184817526006370345/video_2160p-2.mp4?ex=658d5a4f&is=657ae54f&hm=adaa7a109a61cf5039c20b1722db9e27fac99db75e18a95fa14d60a4b73d1c5e&",
  className,
}: VideoProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`  rounded-xl bg-transparent flex justify-center ${className} w-1/2 p-10`}
    >
      <div
        style={{
          transform: "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        className="rounded-xl shadow-2xl"
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          poster="/poster.png"
          className="rounded-xl"
        >
          <source src={src} />
        </video>
      </div>
    </motion.div>
  );
}
