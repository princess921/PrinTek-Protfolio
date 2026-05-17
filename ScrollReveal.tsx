import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  blur?: boolean;
  scale?: boolean;
}

const getVariants = (
  direction: string,
  blur: boolean,
  scale: boolean
): Variants => {
  const offset = 60;
  const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
      ...(blur ? { filter: "blur(12px)" } : {}),
      ...(scale ? { scale: 0.92 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(blur ? { filter: "blur(0px)" } : {}),
      ...(scale ? { scale: 1 } : {}),
    },
  };
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  blur = true,
  scale = false,
}: ScrollRevealProps) => {
  return (
    <motion.div
      variants={getVariants(direction, blur, scale)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
