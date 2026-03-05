"use client";

import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* glow */}
      <div className="absolute -top-56 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-zinc-800/40 blur-3xl" />
      <div className="absolute -bottom-64 left-1/3 h-[520px] w-[520px] rounded-full bg-zinc-800/30 blur-3xl" />

      {/* subtle animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.10]"
        animate={{ backgroundPositionX: ["0px", "220px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </div>
  );
}