"use client";

import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(63,63,70,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(24,24,27,0.9),_rgba(9,9,11,1))]" />

      <motion.div
        className="absolute -top-44 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-zinc-400/10 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-18rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-zinc-500/10 blur-3xl"
        animate={{ opacity: [0.25, 0.5, 0.2], x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.15]"
        animate={{ backgroundPositionX: ["0px", "140px"], backgroundPositionY: ["0px", "70px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(161,161,170,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(161,161,170,0.18) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
    </div>
  );
}
