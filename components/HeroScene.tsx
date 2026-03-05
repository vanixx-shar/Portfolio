"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

type HeroSceneProps = {
  role: string;
  highlights: { title: string; description: string }[];
};

export default function HeroScene({ role, highlights }: HeroSceneProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const glowX = useTransform(mouseX, [0, 1], ["25%", "75%"]);
  const glowY = useTransform(mouseY, [0, 1], ["20%", "80%"]);

  return (
    <div className="relative min-h-[520px] [perspective:1200px] sm:min-h-[560px]">
      <motion.div
        className="relative grid min-h-[520px] grid-rows-[auto_auto_auto] gap-4 overflow-hidden rounded-[2rem] border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/85 p-5 [transform-style:preserve-3d] sm:min-h-[560px] sm:p-7"
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
          <div className="relative aspect-[3/4] w-full max-w-[14rem] overflow-hidden rounded-3xl border border-zinc-700/70 bg-zinc-900/80 p-2 shadow-[0_16px_60px_rgba(0,0,0,0.4)] sm:max-w-[15rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-zinc-800">
              <Image
                src="/vanika-portrait.jpg"
                alt="Portrait of Vanika Sharma"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 65vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-zinc-950/10" />
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-2">
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
