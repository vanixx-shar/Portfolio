"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";

type HeroSceneProps = {
  role: string;
  highlights: { title: string; description: string }[];
};

export default function HeroScene({ role, highlights }: HeroSceneProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 160,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 160,
    damping: 24,
  });

  const glowX = useTransform(mouseX, [0, 1], ["35%", "65%"]);
  const glowY = useTransform(mouseY, [0, 1], ["35%", "65%"]);

  return (
    <div className="relative h-[430px] sm:h-[520px] [perspective:1200px]">
      <motion.div
        className="relative grid h-full grid-rows-[auto_1fr_auto] overflow-hidden rounded-[2rem] border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/85 p-5 [transform-style:preserve-3d] sm:p-7"
        style={{ rotateX, rotateY }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          mouseX.set((event.clientX - rect.left) / rect.width);
          mouseY.set((event.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => {
          mouseX.set(0.5);
          mouseY.set(0.5);
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.1), transparent 45%)",
            ["--gx" as string]: glowX,
            ["--gy" as string]: glowY,
          }}
        />

        <div className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          <Sparkles className="h-3 w-3" />
          Robotics Signal
        </div>

        <div className="relative z-10 grid place-items-center">
          <div className="relative h-48 w-48 rounded-full border border-zinc-700/70 bg-zinc-950/95 sm:h-56 sm:w-56">
            <div className="grid h-full place-items-center">
              <Cpu className="h-10 w-10 text-zinc-200" />
            </div>

            <motion.div
              className="absolute inset-[-18px] rounded-full border border-zinc-700/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-34px] rounded-full border border-zinc-700/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Current Role</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-300">{role}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {highlights.slice(0, 3).map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-950/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
