"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  /** Distance in px for directional reveals. */
  distance?: number;
  once?: boolean;
};

function buildVariants(direction: Direction, distance: number): Variants {
  const hidden: Record<string, number | string> = { opacity: 0 };
  switch (direction) {
    case "up":
      hidden.y = distance;
      break;
    case "down":
      hidden.y = -distance;
      break;
    case "left":
      hidden.x = distance;
      break;
    case "right":
      hidden.x = -distance;
      break;
    case "scale":
      hidden.scale = 0.9;
      break;
    case "blur":
      hidden.filter = "blur(14px)";
      hidden.y = distance / 2;
      break;
  }
  return {
    hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(direction, distance)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
