import { motion, useMotionValue, useTransform } from "framer-motion";

type VideoProps = {
  src: string;
  className?: string;
};

export default function NewVideo({
  src = "/videos/demoVR.mp4",
  className,
}: VideoProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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

  return (
    <motion.div
      style={{ rotateX, rotateY, 
        transformStyle: "preserve-3d", }}
      onMouseMove={handleMouseMove}
      className="rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 flex justify-center w-3/4 "
    >
      <video loop muted autoPlay playsInline poster="/After.jpg">
        <source src={src} />
      </video>
    </motion.div>
  );
}
