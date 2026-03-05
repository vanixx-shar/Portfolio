"use client";

import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* cinematic glow */}
      <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-zinc-800/40 blur-3xl" />
      <div className="absolute -bottom-72 left-1/3 h-[560px] w-[560px] rounded-full bg-zinc-800/25 blur-3xl" />

      {/* animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.11]"
        animate={{ backgroundPositionX: ["0px", "260px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.34) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}